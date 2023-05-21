import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @ManyToMany(() => User, user => user.departments)
    @JoinTable()
    users: User[];

}