import {Entity,Column, PrimaryGeneratedColumn,BaseEntity} from 'typeorm'

@Entity({ engine: "MyISAM" })
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    phone:string
}