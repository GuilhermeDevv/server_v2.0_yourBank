import { CreateUserDTO } from '../dtos/createUserDTO';
import { UpdateUserDTO } from '../dtos/updateUserDTO';
import { UserDTO } from '../dtos/userDTO';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<UserDTO | null>;
  abstract create({ email, name, password }: CreateUserDTO): Promise<boolean>;
  abstract update(
    data: Partial<UpdateUserDTO>,
    email: string,
  ): Promise<boolean>;
  abstract transaction();
  abstract transactionLog();
}
