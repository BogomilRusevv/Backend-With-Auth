import { Department } from 'src/departments/departments.entity';
import { Role } from 'src/roles/roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: 'KukuBend99% '})
  password: string;

  @ManyToMany(() => Department, department => department.users)
  @JoinTable()
  departments: Department[];

  @ManyToOne(() => Role, roles => roles.users)
  @JoinTable()
  role: Role[];
  user: Role;
}