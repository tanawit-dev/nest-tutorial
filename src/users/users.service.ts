import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({ username });
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async create(user: User): Promise<User> {
    user = await this.userRepository.save(user);
    return user;
  }

  async update(user: User) {
    this.userRepository.findOneOrFail(user);
    this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
