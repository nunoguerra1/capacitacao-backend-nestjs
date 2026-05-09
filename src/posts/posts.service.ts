import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) { }

  async create(createPostDto: CreatePostDto, authorId: string) {
    const post = this.postsRepository.create({
      ...createPostDto,
      author: { id: authorId },
    });

    return await this.postsRepository.save(post);
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [posts, total] = await this.postsRepository.findAndCount({
      skip: skip,
      take: limit,
      relations: ['author'],
    });

    return {
      data: posts,
      meta: {
        totalItems: total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: ['author']
    });
    if (!post) throw new NotFoundException(`Post com ID ${id} não encontrado`);
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    await this.postsRepository.update(id, updatePostDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const post = await this.findOne(id);
    await this.postsRepository.remove(post);
    return { message: 'Post removido com sucesso' };
  }
}
