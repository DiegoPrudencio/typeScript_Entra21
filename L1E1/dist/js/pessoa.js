"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //Construtor
    constructor(idade, dia, mes, ano, nomePessoa) {
        this.idade = idade;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.nomePessoa = nomePessoa;
    }
    calculaIdade(dia, mes, ano) {
        let dataAtual = new Date();
        let diaAtual = dataAtual.getDate();
        let mesAtual = dataAtual.getMonth() + 1;
        let anoAtual = dataAtual.getFullYear();
        let anoIdade;
        let mesIdade;
        let diaIdade;
        // if (diaAtual < 10) {
        //     diaAtual = 0 + diaAtual
        // }
        // if (mesAtual < 10) {
        //     mesAtual = 0 + mesAtual
        // }
        anoIdade = anoAtual - ano;
        // if (mesAtual < mes) {
        //     (mesAtual * -1)
        //     mesIdade = ((mesAtual - mes)*-1)
        // } else {
        //     mesIdade = mesAtual - mes
        // }
        // if (diaAtual < dia) {
        //     (diaAtual * -1)
        //     diaIdade = ((diaAtual - dia)* -1)
        // } else {
        //     diaIdade = diaAtual - dia
        // }
        // if (mesIdade < mesAtual) {
        //     this.idade = anoIdade
        // } else if (mesIdade == mesAtual && diaIdade <= diaAtual) {
        //     this.idade = anoIdade
        // } else if (mesIdade == mesAtual && diaIdade > diaAtual) {
        //     this.idade = (anoIdade - 1)
        // } else if (mesIdade > mesAtual) {
        //     this.idade = (anoIdade - 1)
        // }
        // return this.idade
        if (mes < mesAtual) {
            this.idade = anoIdade;
        }
        else if (mes == mesAtual && dia <= diaAtual) {
            this.idade = anoIdade;
        }
        else if (mes == mesAtual && dia > diaAtual) {
            this.idade = (anoIdade - 1);
        }
        else if (mes > mesAtual) {
            this.idade = (anoIdade - 1);
        }
        return this.idade;
    }
    //Métodos Getter e Setter 
    getIdade() {
        return this.idade;
    }
    getNomePessoa() {
        return this.nomePessoa;
    }
    setDataDeNascimento(numDia, numMes, numAno) {
        this.dia = numDia;
        this.mes = numMes;
        this.ano = numAno;
    }
}
exports.Pessoa = Pessoa;
