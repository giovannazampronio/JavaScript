import { Animal } from "./animal";

export class Preguica implements Animal{

    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number
    ){

        this.nome = nome
        this.idade = idade

    }

    emiteSom(): void {
        console.log("Silencioso")
    }

    locomocao(): void {
        console.log("Escala árvores")
    }
}