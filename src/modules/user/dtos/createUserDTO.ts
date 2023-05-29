import { IsNotEmpty } from 'class-validator';
export class CreateUserDTO {
  @IsNotEmpty({ message: 'this field cannot empty' })
  name: string;
  @IsNotEmpty({ message: 'this field cannot empty' })
  email: string;
  @IsNotEmpty({ message: 'this field cannot empty' })
  password: string;
}
