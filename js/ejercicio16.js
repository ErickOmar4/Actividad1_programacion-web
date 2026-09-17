
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    let valor1 = document.getElementById("numero1").value.trim();
    let valor2 = document.getElementById("numero2").value.trim();

    if (valor1 === "" || valor2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, ingrese ambos números para realizar la operación.'
        });
        return;
    }

    let num1 = Number(valor1);
    let num2 = Number(valor2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Solo se permiten números. Verifique los datos ingresados.'
        });
        return;
    }

    let resultadoFinal;

    switch (operacion) {
        case 'suma':
            resultadoFinal = sumar(num1, num2);
            break;
        case 'resta':
            resultadoFinal = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultadoFinal = multiplicar(num1, num2);
            break;
        case 'division':
            resultadoFinal = dividir(num1, num2);
            
            if (resultadoFinal === 'Error: División por cero') {
                Swal.fire({
                    icon: 'warning',
                    title: 'División por cero',
                    text: 'No es posible dividir un número entre cero.'
                });
                document.getElementById("resultado").value = ""; 
                return; 
            }
            break;
        default:
            resultadoFinal = "Operación no válida";
    }
    document.getElementById("resultado").value = resultadoFinal;
};
