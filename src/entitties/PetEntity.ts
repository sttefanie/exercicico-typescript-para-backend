import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../../../src/enum/EnumEspecie";


@Entity() 
export default class PetEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
     especie: EnumEspecie;
    @Column()
    adotado: boolean;
    @Column()
    dataDeNascimento: Date
}