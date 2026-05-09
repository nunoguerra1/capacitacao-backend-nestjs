import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) { }

  async create(createCommentDto: CreateCommentDto, authorId: string) {
    const comment = this.commentsRepository.create({
      content: createCommentDto.content,
      post: { id: createCommentDto.postId },
      author: { id: authorId },
    });

    return await this.commentsRepository.save(comment);
  }

  async findAllByPost(postId: string) {
    return await this.commentsRepository.find({
      where: { post: { id: postId } },
      relations: ['author'],
    });
  }

  async findOne(id: string) {
    const comment = await this.commentsRepository.findOne({
      where: { id },
      relations: ['author', 'post'],
    });
    if (!comment) throw new NotFoundException('Comentário não encontrado');
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    await this.commentsRepository.update(id, updateCommentDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const comment = await this.findOne(id);
    await this.commentsRepository.remove(comment);
    return { message: 'Comentário removido com sucesso' };
  }
}