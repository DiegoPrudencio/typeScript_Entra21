    var temperatura = document.querySelector("#idTemp") as HTMLInputElement;
    var celcius = document.querySelector("#idCelcius") as HTMLInputElement;
    var kelvin = document.querySelector("#idKelvin") as HTMLInputElement;
    var fahrenheit = document.querySelector("#idFahrenheit") as HTMLInputElement;
    var out = document.querySelector("#idOut") as HTMLInputElement;
    var out2 = document.querySelector("#idOut2") as HTMLInputElement;

    let tempCelcius
    let tempFahrenheit
    let tempKelvin


    var btnConvert = document.getElementById("idBtnConvert") as HTMLInputElement;

    btnConvert.onclick = function () {
       


        if (celcius.checked) {
            celciusConvert()
        }
        if (kelvin.checked) {
            kelvinConvert()
        }
        if (fahrenheit.checked) {
            fahrenheitConvert()
        }
    }

    function celciusConvert() {

        let temp: any =  temperatura.value
        tempFahrenheit = (9 * temp + 160) / 5
        out.value = "A temperatura em Fahrenheit é: " + tempFahrenheit.toFixed(2) + " graus."
        tempKelvin = (temp + 273.15)
        out2.value = "A temperatura em Kelvin é: " + tempKelvin + " graus."
        

    }

    function kelvinConvert() {

        let temp: any =  temperatura.value
        tempCelcius = (5 * (temp - 32) / 9)
        out.value = "A temperatura em Celcius é: " + tempCelcius.toFixed(2) + " graus."
        tempKelvin = (((5 * (temp - 32)) / 9) + 273.15)
        out2.value = "A temperatura em Kelvin é: " + tempKelvin.toFixed(2) + " graus."
    }

    function fahrenheitConvert() {

        let temp: any =  temperatura.value
        tempFahrenheit = (((9 * (temp - 273.15)) / 5) + 32)
        //((9*((temperatura - 273,15) )/5) + 32).toFixed(2)
        out.value = "A temperatura em Fahrenheit é: " + tempFahrenheit.toFixed(2) + " graus."
        tempCelcius = (temp - 273.15)
        out2.value = "A temperatura em Celcius é: " + tempCelcius.toFixed(2) + " graus."
    }
