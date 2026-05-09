import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('text')
    content!: string;

    @ManyToOne(() => User, (user) => user.id)
    author!: User;

    @ManyToOne(() => Post, (post) => post.id, { onDelete: 'CASCADE' })
    post!: Post;
}