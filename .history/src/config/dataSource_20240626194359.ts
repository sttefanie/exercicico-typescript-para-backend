import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize:true
})