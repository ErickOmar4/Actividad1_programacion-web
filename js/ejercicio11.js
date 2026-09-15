

function con_millas(){
    const c_kilometros = document.getElementById("entrada_kilometros");
    const valor_kilometeos = c_kilometros.value.trim();
    const Millas = valor_kilometeos *0.621371   ;

    document.getElementById("resultado").value = Millas;

}