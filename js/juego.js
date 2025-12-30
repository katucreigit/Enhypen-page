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

    const btnAdivinar= document.getElementById('btnAdivinar');

    let int= document.getElementById('intentos');
    let result= document.getElementById('resultado');

    let randomNum=  Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    btnAdivinar.addEventListener("click", () => {
        let adivinar = Number(document.getElementById('adivinar').value);
        intentos++;
        int.textContent = "Intentos: " + intentos;
        if (adivinar === randomNum) {
            result.textContent = "¡Felicidades! Adivinaste el número.";
        } else if (adivinar < randomNum) {
            result.textContent= "Demasiado bajo.";
        } else {
            result.textContent= "Demasiado alto.";
        }
    });
});