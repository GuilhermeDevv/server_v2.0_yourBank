import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma';
import { CreateUserDTO } from 'src/modules/users/dtos/createUserDTO';
import { UserDTO } from 'src/modules/users/dtos/userDTO';
import { UserRepository } from '../UserRepository';

@Injectable()
export class PrismaRepository implements UserRepository {
  constructor(private readonly prismaServices: PrismaService) {}
  async findByEmail(email: string): Promise<UserDTO | null> {
    return await this.prismaServices.user.findUnique({
      where: { email },
      include: {
        receivedTransactions: {
          include: {
            sender: {
              select: {
                name: true,
                email: true,
              },
            },
            logs: true,
          },
        },
        sentTransactions: {
          include: {
            receiver: {
              select: {
                name: true,
                email: true,
              },
            },
            logs: true,
          },
        },
      },
    });
  }
  async create({ email, name, password }: CreateUserDTO) {
    return await true;
  }
  update() {
    throw new Error('Method not implemented.');
  }
  transaction() {
    throw new Error('Method not implemented.');
  }
  transactionLog() {
    throw new Error('Method not implemented.');
  }
}
