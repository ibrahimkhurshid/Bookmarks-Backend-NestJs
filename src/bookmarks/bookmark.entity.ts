import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bookmark {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    url: string;
}

export interface BookmarkType {
    id: number,
    title: string;
    url: string;
}