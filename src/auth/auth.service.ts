import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/user.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Declaring the funcitonality of signIn()
  async signIn(email: string, pass: string) {

    // We use the imported usersService to be able to use his findOne()
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    // We make an object from the user login data and assign it to the token 
    // to be encrypted
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  register(data: any) {
    this.usersService.create(data);
  }
}