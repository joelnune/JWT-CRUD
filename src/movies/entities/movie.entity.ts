import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"movies"})
export class Movie {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'text'})
    title:string;

    @Column({type: 'text'})
    description: string;

    @Column({type: 'date'})
    release:Date = new Date();

    @Column({type: 'text'})
    genre:string;

}
