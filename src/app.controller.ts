import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { IsPublic } from './auth/decorators/is-public.decorator';
import { User } from './user/entities/user.entity';

@IsPublic()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@CurrentUser() user: User): Object {
    return this.appService.getHello();
  }
}
