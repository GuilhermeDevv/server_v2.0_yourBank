import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { PrismaRepository } from '../repositories/prisma/PrismaRepository';

@Injectable()
export class UserService {
  constructor(private readonly prismaRepository: PrismaRepository) {}

  async findOne(email: string) {
    const data = await this.prismaRepository.findByEmail(email);
    return data
      ? { message: data, statusCode: 200 }
      : { message: 'Usuário não encontrado', statusCode: 404 };
  }
  async create(data: CreateUserDTO) {
    const isUser = this.prismaRepository.findByEmail(data.email);
    if (isUser) {
      return { message: 'Esse E-mail ja esta em uso', statusCode: 409 };
    }
    const result = await this.prismaRepository.create(data);
    return result
      ? { message: '', statusCode: 204 }
      : { message: 'Erro interno, entre em contato', statusCode: 500 };
  }
}
