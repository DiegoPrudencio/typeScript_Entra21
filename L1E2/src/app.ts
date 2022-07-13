import { Pessoa } from "./pessoa"

var newPessoa1: Pessoa
var newPessoa2: Pessoa
newPessoa1 = new Pessoa("0", 14, 3, 1879, "Albert Einstein"); 
newPessoa2 = new Pessoa("0", 4, 1, 1643, "Isaac Newton"); 

var resultado = newPessoa1.calculaIdade(14, 3, 1879)
var resultado2 = newPessoa2.calculaIdade(4, 1, 1643)

console.log("Albert Einstein: idade de " + resultado);
console.log("Isaac Newton: idade de " + resultado2);




 
