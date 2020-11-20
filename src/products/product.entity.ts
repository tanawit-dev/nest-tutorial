import { IsDefined, IsNumber, IsString, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(2, { always: true })
  name: string;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  sku: string;

  @Column()
  @IsNumber()
  price: number;
}
