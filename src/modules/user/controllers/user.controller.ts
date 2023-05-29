import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':email')
  async findOne(@Param('email') email: string, @Res() response: Response) {
    const { message, statusCode } = await this.userService.findOne(email);
    response.json(message).status(statusCode);
  }
  @Post('/register')
  async createUser(@Body() data: CreateUserDTO, @Res() response: Response) {
    const { message, statusCode } = await this.userService.create(data);
    return response.json(message).status(statusCode);
  }
}
