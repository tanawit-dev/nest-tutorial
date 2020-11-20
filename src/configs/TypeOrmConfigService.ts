import { Role } from './../roles/role.entity';
import { Product } from '../products/product.entity';
import { User } from '../users/user.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configServer: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configServer.get<string>('DB_HOST'),
      port: this.configServer.get<number>('DB_PORT'),
      username: this.configServer.get<string>('DB_USER'),
      password: this.configServer.get<string>('DB_PASSWORD'),
      database: this.configServer.get<string>('DB_NAME'),
      entities: [User, Product, Role],
      synchronize: this.configServer.get<boolean>('DB_SYNC', false),
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
