import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/movies/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthPayloadDto } from './dto/auth.dto';


@Injectable()
export class AuthService {
  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
      private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
      const user = await this.userRepository.findOne({ where: { username } });
      if (user && password == user.password) {
          const { password, ...result } = user;
          return this.jwtService.sign(result);
      }
      return null;
  }
}
