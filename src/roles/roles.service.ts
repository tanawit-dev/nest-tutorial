import { Role } from './role.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class RolesService extends TypeOrmCrudService<Role> {
  constructor(@InjectRepository(Role) readonly repo: Repository<Role>) {
    super(repo);
  }
}
