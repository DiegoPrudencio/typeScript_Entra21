import { Pessoa } from "./pessoa"

var newPessoa1: Pessoa
var newPessoa2: Pessoa
var newPessoa3: Pessoa
newPessoa1 = new Pessoa(0, 0, 0, 0, "Albert Einstein"); 
newPessoa2 = new Pessoa(0, 0, 0, 0, "Isaac Newton");
newPessoa3 = new Pessoa(0, 0, 0, 0, "Diego Prudêncio");


newPessoa1.setDataDeNascimento(14, 3, 1879)
console.log(newPessoa1);

newPessoa2.setDataDeNascimento(4, 1, 1643)
console.log(newPessoa2);

newPessoa3.setDataDeNascimento(28, 9, 1992)
console.log(newPessoa3);

var resultado = newPessoa1.calculaIdade(14, 3, 1879)
var resultado2 = newPessoa2.calculaIdade(4, 1, 1643)
var resultado3 = newPessoa3.calculaIdade(28, 9, 1992)


console.log("Albert Einstein: idade de " + resultado + " anos");
console.log("Isaac Newton: idade de " + resultado2 + " anos");
console.log("Diego Prudêncio: idade de " + resultado3 + " anos");




 
