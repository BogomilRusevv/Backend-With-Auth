import { Controller,Post, Get, Req } from "@nestjs/common";

@Controller('users')
export class UserController {
    @Post()
    create(): string {
        return 'This action adds new user'
    }

    // @Get()
    // getAll(@Req() request: Request): string{
    //     return "This returns all the users";
    // }

    // @Get('/role')
    // getUserRole(@Req() request: Request): string{
    //     return "This returns users's role"
    // }


} 