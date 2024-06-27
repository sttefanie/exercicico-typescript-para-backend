import { DataSource } from "typeorm";
import PetEntity from '../../build/src/entitties/PetEntity';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    entities: [PetEntity],
    synchronize:true
})