import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(50, { message: 'O conteúdo deve ter pelo menos 50 caracteres' })
    content!: string;
}
