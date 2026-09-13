 function convertir() {
    const Celcius = document.getElementById("G_celcius");
    const valorCelsius = Celcius.value.trim();
    const resultadoFahrenheit = document.getElementById('repuesta');

    const fahrenheit = (valorCelsius * 9 / 5) + 32;

    resultadoFahrenheit.value = fahrenheit.toFixed(2) + " °F";
    document.getElementById("respuesta").value =fahrenheit;
    
    

}