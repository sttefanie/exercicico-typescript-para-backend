import PetEntity from "../../entitties/PetEntity";

export default interface InterfacePetRepository {
    criarPet(pet: PetEntity): void;
    listarPets(): Array<PetEntity>;
    atualizaPet(id: number, pet: PetEntity): void;
    deletarPet(id: number): void;
}

