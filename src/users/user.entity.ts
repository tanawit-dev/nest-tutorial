import { Role } from './../roles/role.entity';
import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'datetime' })
  @CreateDateColumn()
  createAt: Date;

  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updateAt: Date;

  @OneToOne(() => Role, { eager: true })
  @JoinColumn()
  role: Role;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
