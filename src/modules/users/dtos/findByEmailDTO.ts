import { IsNotEmpty } from 'class-validator';

export class FindByEmailDTO {
  @IsNotEmpty({ message: 'field empty' })
  email: string;
}
