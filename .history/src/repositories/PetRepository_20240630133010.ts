import PetEntity from "../entitties/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository {
    criarPet(pet: PetEntity): void {
        throw new Error("Method not implemented.");
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