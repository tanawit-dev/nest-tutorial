import { UsersService } from './users.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Logger,
  NotFoundException,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { User } from './user.entity';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private usersService: UsersService) {}

  private readonly logger: Logger = new Logger(UsersController.name);

  @Get()
  async findAll(): Promise<User[]> {
    console.log("test");
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Post() 
  async create(@Body() createUser: User) {
    return await this.usersService.create(createUser);
  }

  @Put(':id')
  async update(@Body() updateUser: User) {
    try {
      return await this.usersService.update(updateUser);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.remove(+id);
  }
}
