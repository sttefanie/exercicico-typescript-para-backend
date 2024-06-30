import { Repository } from "typeorm";
import PetEntity from "../entitties/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository {
    private repository: Repository<PetEntity>;
    
    constructor(repository: Repository<PetEntity>) {
        this.repository = repository;
    }
    criarPet(pet: PetEntity): void {
       this.repository.save(pet);
    }
    listarPets(): Array<PetEntity> {
        throw new Error("Method not implemented.");
    }
    atualizaPet(id: number, pet: PetEntity): void {
        throw new Error("Method not implemented.");
    }
    deletarPet(id: number): void {
        throw new Error("Method not implemented.");
    }

}