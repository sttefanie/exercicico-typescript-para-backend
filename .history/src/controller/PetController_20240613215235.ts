import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";

let listaDePets: Array<TipoPet> = [];


export default class PetController {
    criarPet(req: Request, res: Response) {
        const { id, adotado, especie, idade, nome } = <TipoPet>req.body;
        const novoPet: TipoPet = { id, adotado, especie, idade, nome };
        listaDePets.push(novoPet);
        return res.status(201).json(novoPet);
    }
}