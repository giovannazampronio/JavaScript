const prompt = require("prompt-sync")()

let cont21 = 0
let cont50 = 0

while(true){
    let idade = Number(prompt("Digite uma idade: "))
    
    idade != -99

    if(idade <= 21){
    cont21++

}else if(idade >= 50){
    cont50++

console.log(`O total de idades menores que 21 anos é: ${cont21} e maiores que 50 anos é: ${cont50}`)
}
}
