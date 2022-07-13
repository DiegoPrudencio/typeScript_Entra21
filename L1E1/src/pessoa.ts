export class Pessoa{
    //Modificadores de Acesso: public, private, protected, readonly  
    //Atributos
    private idade: number;
    private dia: number;
    private mes: number;
    private ano: number;
    private nomePessoa: string;

    //Construtor
    constructor(idade: number, dia: number, mes: number, ano: number, nomePessoa: string){
        this.idade = idade; 
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.nomePessoa = nomePessoa
    }

    public calculaIdade(dia: number, mes: number, ano: number): number {
        let dataAtual = new Date();
        let diaAtual = dataAtual.getDate();
        let mesAtual = dataAtual.getMonth()+1;
        let anoAtual = dataAtual.getFullYear();
        let anoIdade: number

        anoIdade = anoAtual - ano

        if (mes < mesAtual) {
            this.idade = anoIdade

        } else if (mes == mesAtual && dia <= diaAtual) {
            this.idade = anoIdade
        
        } else if (mes == mesAtual && dia > diaAtual) {
            this.idade = (anoIdade - 1)

        } else if (mes > mesAtual) {
            this.idade = (anoIdade - 1)
        }

        return this.idade
        
    }

    //Métodos Getter e Setter 
    public getIdade():number{
        return this.idade; 
    }

    public getNomePessoa():string{
        return this.nomePessoa; 
    }

    public setDataDeNascimento(numDia: number, numMes: number, numAno: number):void{
        this.dia = numDia;
        this.mes = numMes;
        this.ano = numAno;
    }

}