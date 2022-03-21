import { User } from '../entities/user.entity';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto extends User {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  name: string;
}
