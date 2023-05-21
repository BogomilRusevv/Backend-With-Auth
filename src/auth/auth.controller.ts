import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { Public } from 'src/decorators/public.decorator';
  import { AuthGuard } from './auth.guard';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, string>) {
      return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('register')
    register(
      @Body('fullName') fullName: string,
      @Body('email') email: string) {
      return this.authService.register( {fullName, email} );
    }
    
    // We assign AuthGard making the profile Endpoint protected
    // Meaning we can't access it without a valid token
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }