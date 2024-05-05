import {Entity,Column, PrimaryGeneratedColumn,BaseEntity} from 'typeorm'

@Entity({ engine: "MyISAM" })
export class Card{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    category:string;

    @Column()
    type:string
}