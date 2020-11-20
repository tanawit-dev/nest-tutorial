import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService extends TypeOrmCrudService<Product> {
  constructor(
    @InjectRepository(Product)
    readonly repo: Repository<Product>,
  ) {
    super(repo);
  }
}
