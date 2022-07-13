export class Endereco{
    //Modificadores de Acesso: public, private, protected, readonly 
    private cep: number;
    private uf: string;
    private estado: string;
    private cidade: string;
    private bairro: string;
    private rua: string;
    private numeroResidencia: number;
    private complemento: string;

    constructor(cep: number, uf: string, estado: string, cidade: string, bairro: string, rua: string, numeroResidencia: number, complemnto: string){
        this.cep = cep; 
        this.uf = uf
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.rua = rua
        this.numeroResidencia = numeroResidencia
        this.complemento = complemnto
    }

    public calculaIdade(dia: number, mes: number, ano: number): string{
        let dataAtual = new Date();
        let diaAtual = dataAtual.getDate();
        let mesAtual = dataAtual.getMonth()+1;
        let anoAtual = dataAtual.getFullYear();
        let anoIdade
        let anoMes
        let anoDia

        if (diaAtual < 10) {
            diaAtual = 0 + diaAtual
        }
        if (mesAtual < 10) {
            mesAtual = 0 + mesAtual
        }

        anoIdade = anoAtual - ano

        if (mesAtual < mes) {
            (mesAtual * -1)
            anoMes = ((mesAtual - mes)*-1)
        } else {
            anoMes = mesAtual - mes
        }

        if (diaAtual < dia) {
            (diaAtual * -1)
            anoDia = ((diaAtual - dia)* -1)
        } else {
            anoDia = diaAtual - dia
        }


        this.idade = anoIdade + " anos, " + anoMes + " meses, " + anoDia + " dias"
        return this.idade
    }

    //Métodos Getters
     
    public getcep(): number {
        return this.cep;
    }
    public getUf(): string {
        return this.uf;
    }
    public getEstado(): string {
        return this.estado;
    }
    public getCidade(): string {
        return this.cidade;
    }
    public getBairro(): string {
        return this.bairro;
    }
    public getRua(): string {
        return this.rua;
    }
    public getNumeroResidencia(): number {
        return this.numeroResidencia;
    }
    public getComplemento(): string {
        return this.complemento;
    }


    //Métodos Setters

    public setCep(cep: number) {
        this.cep = cep;
    }
    public setUf(uf: string) {
        this.uf = uf;
    }
    public setEstado(estado: string) {
        this.estado = estado;
    }
    public setCidade(cidade: string) {
        this.cidade = cidade;
    }
    public setBairro(bairro: string) {
        this.bairro = bairro;
    }
    public setRua(rua: string) {
        this.rua = rua;
    }
    public setNumeroResidencia(numeroResidencia: number) {
        this.numeroResidencia = numeroResidencia;
    }
    public setComplemento(complemento: string) {
        this.complemento = complemento;
    }


    public getEnderecoCompleto(cep: number, uf: string, estado: string, cidade: string, bairro: string, rua: string, numeroResidencia: number, complemnto: string){
   
    }

}