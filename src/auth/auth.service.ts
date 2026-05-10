import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async login(email: string, pass: string) {
        const user = await this.usersService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException('E-mail ou senha incorretos');
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new UnauthorizedException('E-mail ou senha incorretos');
        }

        const payload = { email: user.email, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}