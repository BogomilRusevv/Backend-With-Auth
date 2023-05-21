import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Role } from './roles/roles.entity';
import { Department } from './departments/departments.entity';
import { DepartmentsModule } from './departments/departments.module';
import { DapartmentsController } from './departments/departments.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserController } from './users/user.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UsersModule, DepartmentsModule, AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ERP-DB',
      entities: [User, Role, Department],
      synchronize: true,
    }),
    ],
  controllers: [AppController, DapartmentsController, UserController, AuthController],
  providers: [AppService],
})
export class AppModule {}
