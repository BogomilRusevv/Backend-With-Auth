import { Injectable } from "@nestjs/common";
import { Role } from "./roles.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RolesService{
    constructor(
        @InjectRepository(Role)
        private rolesRepository: Repository<Role>
    ) {}

    findAll(): Promise<Role[]> {
        return this.rolesRepository.find();
      }

    findOne(name: string): Promise<Role> {
        return this.rolesRepository.findOneBy({ name });
    }

    async addRole(role: any): Promise<Role> {
        return this.rolesRepository.save(role);
      }
}