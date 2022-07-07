"use strict";
var btnCalcularAreas = document.getElementById("idBtnCalcularAreas");
var btnCalcularCirculo = document.getElementById("idBtCalcularCirculo");
var btnCalcularRetangulo = document.getElementById("idBtCalcularRetangulo");
var btnCalcularTrianguloRetangulo = document.getElementById("idBtCalcularTrianguloRetangulo");
var btnCalcularTrianguloEquilatero = document.getElementById("idBtCalcularTrianguloEquilatero");
btnCalcularAreas.onclick = function () {
    //let formas = document.getElementById("idFormas") as HTMLSelectElement
    let formas = document.getElementById('idFormas').value;
    let sectionCirculo = document.getElementById("idSectionCirculo");
    let sectionRetangulo = document.getElementById("idSectionRetangulo");
    let sectionTrianguloRetangulo = document.getElementById("idSectionTrianguloRetangulo");
    let sectionTrianguloEquilatero = document.getElementById("idSectionTrianguloEquilatero");
    if (formas == "circulo") {
        sectionCirculo.hidden = false;
        sectionRetangulo.hidden = true;
        sectionTrianguloRetangulo.hidden = true;
        sectionTrianguloEquilatero.hidden = true;
    }
    if (formas == "retangulo") {
        sectionCirculo.hidden = true;
        sectionRetangulo.hidden = false;
        sectionTrianguloRetangulo.hidden = true;
        sectionTrianguloEquilatero.hidden = true;
    }
    if (formas == "trianguloRetangulo") {
        sectionCirculo.hidden = true;
        sectionRetangulo.hidden = true;
        sectionTrianguloRetangulo.hidden = false;
        sectionTrianguloEquilatero.hidden = true;
    }
    if (formas == "trianguloEquilatero") {
        sectionCirculo.hidden = true;
        sectionRetangulo.hidden = true;
        sectionTrianguloRetangulo.hidden = true;
        sectionTrianguloEquilatero.hidden = false;
    }
};
btnCalcularCirculo.onclick = function () {
    let circulo = document.getElementById("idCirculo");
    let areaCirculo = document.getElementById("idAreaCirculo");
    let resultadoAreaCirculo;
    // circulo.value = Number(circulo.value)
    resultadoAreaCirculo = 3.14 * (Number(circulo.value) ** 2);
    console.log(resultadoAreaCirculo);
    areaCirculo.value = "Área: " + resultadoAreaCirculo + " m²";
    //resultadoAreaCirculo = areaCirculo.value 
};
btnCalcularRetangulo.onclick = function () {
    let retanguloLado1 = document.getElementById("idRetanguloLado1");
    let retanguloLado2 = document.getElementById("idRetanguloLado2");
    let areaRetangulo = document.getElementById("idAreaRetangulo");
    let resultadoAreaRetangulo;
    resultadoAreaRetangulo = Number(retanguloLado1.value) * Number(retanguloLado2.value);
    areaRetangulo.value = "Área: " + resultadoAreaRetangulo + " m²";
};
btnCalcularTrianguloRetangulo.onclick = function () {
    let trianguloRetanguloAltura = document.getElementById("idTrianguloRetanguloAltura");
    let trianguloRetanguloBase = document.getElementById("idTrianguloRetanguloBase");
    let areaTrianguloRetangulo = document.getElementById("idAreaTrianguloRetangulo");
    let resultadoAreaTrianguloRetangulo;
    resultadoAreaTrianguloRetangulo = (Number(trianguloRetanguloAltura.value) * Number(trianguloRetanguloBase.value)) / 2;
    areaTrianguloRetangulo.value = "Área: " + resultadoAreaTrianguloRetangulo + " m²";
};
btnCalcularTrianguloEquilatero.onclick = function () {
    let trianguloEquilatero = document.getElementById("idTrianguloEquilatero");
    let areaTrianguloEquilatero = document.getElementById("idAreaTrianguloEquilatero");
    let resultadoAreaTrianguloEquilatero;
    resultadoAreaTrianguloEquilatero = ((Number(trianguloEquilatero.value) ** 2) * 3 ** (1 / 2)) / 4;
    areaTrianguloEquilatero.value = "Área: " + resultadoAreaTrianguloEquilatero.toFixed(2) + " m²";
};
