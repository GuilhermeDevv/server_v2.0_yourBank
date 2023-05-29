import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { PrismaService } from 'src/database/prisma';
import { PrismaRepository } from './repositories/prisma/PrismaRepository';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, PrismaRepository],
})
export class UsersModule {}
