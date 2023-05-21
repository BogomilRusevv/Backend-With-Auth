import { Controller,Post, Get, Req } from "@nestjs/common";

@Controller('departments')
export class DapartmentsController {
    @Post()
    create(): string {
        return 'This action adds new department'
    }

    // @Get()
    // getAll(@Req() request: Request): string{
    //     return "This returns all departments";
    // }

    // @Get('/departmentName')
    // getUsers(@Req() request: Request): string{
    //     return "This returns all users in the given department";
    // }
}