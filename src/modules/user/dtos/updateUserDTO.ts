import { UserDTO } from './userDTO';

export class UpdateUserDTO implements UserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  balance: number;
}
