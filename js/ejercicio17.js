function manejarTareas() {
    let tareas = [];

    function obtenerTareas() {
        let datos = localStorage.getItem("tareas");
        if (datos) {
            tareas = JSON.parse(datos);
        } else {
            tareas = [];
        }
    }

    function agregarTarea(texto) {
        if (texto.trim() === "") {
            Swal.fire('Error', 'Escribe una tarea válida', 'warning');
            return;
        }

        obtenerTareas();
        tareas.push({ id: Date.now(), texto: texto.trim() });
        localStorage.setItem("tareas", JSON.stringify(tareas));
        renderizarTareas();
        document.getElementById("input_tarea").value = "";
    }

    function eliminarTarea(id) {
        Swal.fire({
            title: '¿Eliminar tarea?',
            text: "No podrás recuperarla",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                obtenerTareas();
                tareas = tareas.filter(t => t.id !== id);
                localStorage.setItem("tareas", JSON.stringify(tareas));
                renderizarTareas();
                Swal.fire('Eliminada', 'La tarea ha sido borrada.', 'success');
            }
        });
    }

    function renderizarTareas() {
        let contenedor = document.getElementById("lista_tareas");
        obtenerTareas();
        contenedor.innerHTML = "";

        if (tareas.length === 0) {
            contenedor.innerHTML = "<p>No hay tareas pendientes.</p>";
            return;
        }

        tareas.forEach(function(tarea) {
            let div = document.createElement("div");
            div.className = "tarea-item";
            div.innerHTML = `
                <span>${tarea.texto}</span>
                <button class="btn-eliminar" onclick="app.eliminarTarea(${tarea.id})">Eliminar</button>
            `;
            contenedor.appendChild(div);
        });
    }

    return {
        agregarTarea: agregarTarea,
        eliminarTarea: eliminarTarea,
        renderizarTareas: renderizarTareas
    };
}

const app = manejarTareas();

document.getElementById("btn_agregar").onclick = function() {
    let texto = document.getElementById("input_tarea").value;
    app.agregarTarea(texto);
};

app.renderizarTareas();