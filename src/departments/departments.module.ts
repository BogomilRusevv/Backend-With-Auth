import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DapartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { Department } from './departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  providers: [DepartmentsService],
  controllers: [DapartmentsController]
})
export class DepartmentsModule {}