import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    title!: string;

    @Column('text')
    content!: string;

    @ManyToOne(() => User, (user) => user.id)
    author!: User;
}