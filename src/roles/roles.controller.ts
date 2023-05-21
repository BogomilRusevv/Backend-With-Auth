import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { User } from "src/users/user.entity";
import { UsersService } from "src/users/user.service";
import { RolesService } from "./roles.service";
import { Role } from "./roles.entity";

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}
    @Post()
    create(): string {
        return 
    }

    @Get()
    async getAll(@Req() request: Request): Promise<Role[]> {
        return this.rolesService.findAll() ;
    }

    // @Get('/userRole')
    // getUserRole(@Req() request: Request): string{
    //     return "This returns users's role"
    // }

    @Post('/addRole') 
    async addRole (
        @Body('name') name: string,
        ) {
        return this.rolesService.addRole(
            {
                name
            }
        )
    }


} 