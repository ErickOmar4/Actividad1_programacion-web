
function Pesos_a_dolar(){
    const entrada_pesos = document.getElementById("en_pesos");
    const pesos = entrada_pesos.value.trim();
    if(pesos >0 && pesos !== null){
    const Res_dolares = pesos * 0.055;

    document.getElementById("resultado_dolar").value = Res_dolares + " USD ";
    }else{
        alert("se necesita que ingrese una cantidad mayor a 0");
    }
}
