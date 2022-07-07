"use strict";
//Declaração de variáveis globais 
var temperaturas = [];
var datas = [];
let temperatura = document.getElementById("idTemperatura");
let data = document.getElementById("idDataIn");
//var out1 = document.getElementById("idOut").value
//Variáveis botões
var btnCadastrar = document.getElementById("idBtnCadastrar");
var btnLimpar = document.getElementById("idBtnLimpar");
var btnVerificarTemp = document.getElementById("idBtnVerificar");
/*
 * Rotina de Inicialização e verificação das informações
 * Descrição: Inicializa variáveis globais e tela
 * Parâmetros: none
 * Retorno: none
 */
btnCadastrar.onclick = function () {
    //let temperatura = document.getElementById("idTemperatura") as HTMLInputElement
    // let data = document.getElementById("idDataIn") as HTMLInputElement
    //Chama as funções de validação
    let validarTemperatura = temperaturaValida(String(temperatura.value));
    let validarData = dataValida(data.value);
    if (validarTemperatura && validarData) {
        temperaturas.push(Number(temperatura.value));
        datas.push(String(data.value));
    }
    temperatura.value = "";
    data.value = "";
    console.log(temperaturas);
    console.log(datas);
};
btnLimpar.onclick = function () {
    let temperatura = document.getElementById("idTemperatura");
    let data = document.getElementById("idDataIn");
    temperatura.value = "";
    data.value = "";
};
//Função para verificar temperatura
btnVerificarTemp.onclick = function () {
    let outHidden = document.getElementById("idOut");
    outHidden.hidden = false;
    let dataCheck = document.getElementById("idDataCheck");
    let validarDataCheck = dataValidaCheck(dataCheck.value);
    for (let i = 0; i < datas.length; i++) {
        let indexAux;
        if (datas[i] == dataCheck.value) {
            indexAux = i;
        }
        for (let j = 0; j < temperaturas.length; j++) {
            if (indexAux == j) {
                let out1 = document.getElementById("idOut1");
                out1.value = "Data: " + dataCheck.value;
                let out2 = document.getElementById("idOut2");
                out2.value = "Temperatura: " + temperaturas[j] + " C°.";
                dataCheck.value = "";
            }
        }
    }
};
//Validação das informações adicionadas
function temperaturaValida(temperatura) {
    if (temperatura == "" || temperatura == " ") {
        alert("Temperatura Inválida");
        temperatura = "";
        //temperatura.focus()
        return false;
    }
    return true;
}
function dataValida(data) {
    if (data == "" || data == " ") {
        alert("Data Inválida");
        data = "";
        //data.focus()
        return false;
    }
    return true;
}
function dataValidaCheck(dataCheck) {
    if (dataCheck == "" || dataCheck == " ") {
        alert("Data Inválida");
        dataCheck = "";
        //dataCheck.focus()
        return false;
    }
    return true;
}
