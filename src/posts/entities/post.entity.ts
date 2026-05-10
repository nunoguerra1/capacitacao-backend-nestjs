import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    title!: string;

    @Column({ unique: true })
    slug!: string;

    @Column('text')
    content!: string;

    @ManyToOne(() => User, (user) => user.id)
    author!: User;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;
}