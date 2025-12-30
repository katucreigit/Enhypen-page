document.addEventListener("DOMContentLoaded", function() {
    const preguntas= [
        {
            preg: "¿En que año debuto enhypen?",
            rta: "2020"
        },
        {
            preg: "¿Cuántos miembros conforman la banda?",
            rta: "7"
        },
        {
            preg: "¿Qué miembro de enhypen es originario de Japón?",
            rta: "Ni-Ki"
        },
        {
            preg: "¿Cuál es el miembro más grande en la banda?",
            rta: "Heeseung"
        },
        {
            preg: "¿Cuál es el nombre completo de Jay",
            rta: "Park Jong-seong"
        }
    ];

    let indice= 0;

    const pregunta = document.getElementById('pregunta');
    const mensaje = document.getElementById('mensaje');
    const respuesta = document.getElementById('respuesta');
    const btnEnviar= document.getElementById('botonEnviar');

    function cargarPregunta() {
        if (indice >= preguntas.length) {
            pregunta.innerHTML = '¡Felicidades! Terminaste el cuestionario.';
            btnEnviar.style.display = 'none';
            respuesta.style.display = 'none';
            return;
        }
        const p = preguntas[indice];
            pregunta.innerHTML = p.preg;
            respuestavalue = '';
            mensaje.innerHTML = '';
    }
    btnEnviar.addEventListener("click", () => {
        const respuestaUsuario = respuesta.value.trim().toLowerCase();
        const respuestaCorrecta = preguntas[indice].rta.toLowerCase();
        if (respuestaUsuario === respuestaCorrecta) {
            mensaje.innerHTML = '¡Correcto!';
            indice++;
            setTimeout(cargarPregunta, 2000);
        } else {
            mensaje.innerHTML = 'Inténtalo de nuevo.';
        }
    });
    cargarPregunta();
});