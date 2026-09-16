

function con_millas(){
    const c_kilometros = document.getElementById("entrada_kilometros");
    const valor_kilometeos = c_kilometros.value.trim();

    if(valor_kilometeos >0){
    const Millas = valor_kilometeos *0.621371   ;

    
    document.getElementById("resultado").value = Millas;
    } else{
        alert("se necesita que ingrese una cantidad mayor a 0");
    }

}