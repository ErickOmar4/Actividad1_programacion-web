
let estudiantes = [];

function agregarEstudiante() {

    let nombre = document.getElementById("nombre_estudiante").value.trim();
    let calificacionTexto = document.getElementById("calificacion_estudiante").value.trim();
    
    if (nombre === "" || calificacionTexto === "") {
        alert("Por favor, ingrese tanto el nombre como la calificación.");
        return;
    }

    let calificacion = Number(calificacionTexto);

    if (isNaN(calificacion)) {
        alert("Por favor, ingrese una calificación numérica válida.");
        return;
    }


    let nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(nuevoEstudiante);

    document.getElementById("nombre_estudiante").value = "";
    document.getElementById("calificacion_estudiante").value = "";
    
    console.log("Estudiante agregado:", nuevoEstudiante);
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("No hay estudiantes en la lista. Agregue al menos uno antes de calcular.");
        return;
    }

    let sumaTotal = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = sumaTotal / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteAlta = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteBaja = estudiantes.find(e => e.calificacion === calificacionMinima);


    document.getElementById("r_promedio").value = promedio.toFixed(2);
    document.getElementById("r_nombre_cAlta").value = estudianteAlta.nombre;
    document.getElementById("r_nombre_cBajo").value = estudianteBaja.nombre;
}