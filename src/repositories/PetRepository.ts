import { Repository } from "typeorm";
import PetEntity from "../entitties/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository {
    private repository: Repository<PetEntity>;
    
    constructor(repository: Repository<PetEntity>) {
        this.repository = repository;
    }
   async listarPets(): Array<PetEntity> | Promise<PetEntity[]> {
        throw new Error("Method not implemented.");
    }
    criarPet(pet: PetEntity): void {
       this.repository.save(pet);
    }
    async listaPets(): Promise<PetEntity[]> {
       return await this.repository.find()
    }
    atualizaPet(id: number, pet: PetEntity): void {
        throw new Error("Method not implemented.");
    }
    deletarPet(id: number): void {
        throw new Error("Method not implemented.");
    }

}