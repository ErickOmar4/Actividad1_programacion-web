
function validar_Votar(){
    const entrada = document.getElementById("entrada_Edad");
    const Edad = entrada.value.trim();


    if(Edad !== null || Edad<0 ){
        alert("ingrese una edad mayor 0 en la caja de texto");
    } else if( Edad>= 18){
        document.getElementById("respuesta_validacion").value = "Puedes votar ";
    }else{
        document.getElementById("respuesta_validacion").value = "No puedes votar ";
    }
}