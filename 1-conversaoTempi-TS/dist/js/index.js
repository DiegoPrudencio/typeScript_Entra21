"use strict";
var temperatura = document.querySelector("#idTemp");
var celcius = document.querySelector("#idCelcius");
var kelvin = document.querySelector("#idKelvin");
var fahrenheit = document.querySelector("#idFahrenheit");
var out = document.querySelector("#idOut");
var out2 = document.querySelector("#idOut2");
let tempCelcius;
let tempFahrenheit;
let tempKelvin;
var btnConvert = document.getElementById("idBtnConvert");
btnConvert.onclick = function () {
    if (celcius.checked) {
        celciusConvert(Number(temperatura.value));
    }
    if (kelvin.checked) {
        kelvinConvert(Number(temperatura.value));
    }
    if (fahrenheit.checked) {
        fahrenheitConvert(Number(temperatura.value));
    }
};
function celciusConvert(temperatura) {
    tempFahrenheit = (9 * temperatura + 160) / 5;
    out.value = "A temperatura em Fahrenheit é: " + tempFahrenheit.toFixed(2) + " graus.";
    tempKelvin = (temperatura + 273.15);
    out2.value = "A temperatura em Kelvin é: " + tempKelvin + " graus.";
}
function kelvinConvert(temperatura) {
    tempFahrenheit = (((9 * (temperatura - 273.15)) / 5) + 32);
    out.value = "A temperatura em Fahrenheit é: " + tempFahrenheit.toFixed(2) + " graus.";
    tempCelcius = (temperatura - 273.15);
    out2.value = "A temperatura em Celcius é: " + tempCelcius.toFixed(2) + " graus.";
}
function fahrenheitConvert(temperatura) {
    tempKelvin = (((5 * (temperatura - 32)) / 9) + 273.15);
    out.value = "A temperatura em Kelvin é: " + tempKelvin.toFixed(2) + " graus.";
    tempCelcius = (5 * (temperatura - 32) / 9);
    out2.value = "A temperatura em Celcius é: " + tempCelcius.toFixed(2) + " graus.";
}
