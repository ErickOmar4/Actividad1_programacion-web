
function ejecutarMetodos(){
    const entrada_numeros1 =  document.getElementById("lista_numeros");
    const entrada_numeros= entrada_numeros1.value;

    if(entrada_numeros.trim() !==""){
    let arreglo = entrada_numeros.split(",");
    let numeros = arreglo.map(Number);   

    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    let suma = numeros.reduce((acc, valor) => acc +valor,0);
    let promedio=  suma/numeros.length;

    console.log(maximo);
    console.log(minimo);
    document.getElementById("num_mayor").value = maximo;
    document.getElementById("num_menor").value = minimo;
    document.getElementById("promedio").value = promedio;
    }else{
        alert("ingrese una lista de numeros divida por comas");
    }
    


}
