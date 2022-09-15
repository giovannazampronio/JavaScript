import{Animal}from "./animal";

export class Cavalo implements Animal{

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
        console.log("Relincha")
    }

    locomocao(): void {
        console.log("Cavalga")
    }
}