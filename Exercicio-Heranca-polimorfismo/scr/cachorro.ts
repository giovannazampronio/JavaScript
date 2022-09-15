import{Animal} from "./animal";

export class Cachorro implements Animal{

    nome: string
    idade: number

    constructor(
        nome: string,
        idade: number
    ){
            this.nome = nome
            this.idade = idade
    }

    emiteSom(): void {
        console.log("Late");
    }
    locomocao(): void {
        console.log("Corre");
    }
}