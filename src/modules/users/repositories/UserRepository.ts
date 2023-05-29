import { CreateUserDTO } from '../dtos/createUserDTO';
import { UserDTO } from '../dtos/userDTO';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<UserDTO | null>;
  abstract create({ email, name, password }: CreateUserDTO): Promise<boolean>;
  abstract update();
  abstract transaction();
  abstract transactionLog();
}
