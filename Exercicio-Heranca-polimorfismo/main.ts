import { Cachorro } from "./scr/cachorro";
import { Cavalo } from "./scr/cavalo";
import { Preguica } from "./scr/preguica";

let cachorro = new Cachorro("Bartholomeu", 13)
console.log(cachorro)
cachorro.emiteSom()
cachorro.locomocao()

console.log

let cavalo = new Cavalo("Estrela", 5)
console.log(cavalo)
cavalo.emiteSom()
cavalo.locomocao()

console.log

let preguica = new Preguica("Sid", 9)
console.log(preguica)
preguica.emiteSom()
preguica.locomocao()