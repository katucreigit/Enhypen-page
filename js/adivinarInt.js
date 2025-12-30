document.addEventListener("DOMContentLoaded", function() {
const preguntas = [
    {
        imagen: "img/img1.jpg",
        opciones: ["Sung-hoon", "Heeseung", "Jungwon"],
        respuestaCorrecta: 0
    },
    {
        imagen: "img/img2.jpeg",
        opciones: ["Sunoo", "Jake", "Ni-Ki"],
        respuestaCorrecta: 1
    },
    {
        imagen: "img/img3.jpg",
        opciones: ["Ni-Ki", "JaSung-hoonke", "Sunoo"],
        respuestaCorrecta: 2
    },
    {
        imagen: "img/img4.jpg",
        opciones: ["Heeseung", "Jake", "Ni-Ki"],
        respuestaCorrecta: 2
    },
    {
        imagen: "img/img5.jpg",
        opciones: ["Jungwon", "Sung-hoon", "Jay"],
        respuestaCorrecta: 2
    },
    {
        imagen: "img/img6.png",
        opciones: ["Sunoo", "Ni-Ki", "Heeseung"],
        respuestaCorrecta: 0
    },
    {
        imagen: "img/img7.jpg",
        opciones: ["Jay", "Ni-Ki", "Heeseung"],
        respuestaCorrecta: 1
    },
    {
        imagen: "img/img8.webp",
        opciones: ["Sung-hoon", "Jake", "Jungwon"],
        respuestaCorrecta: 2
    },
    {
        imagen: "img/img9.jpg",
        opciones: ["Sunoo", "Ni-Ki", "Jay"],
        respuestaCorrecta: 2
    },
    {
        imagen: "img/img10.jpeg",
        opciones: ["Sunoo", "Jake", "Jay"],
        respuestaCorrecta: 1
    }
    ];

  let indicePregunta = 0;

  const imgElemento = document.getElementById('imagen');
  const botones = [
    document.getElementById('opcion1'),
    document.getElementById('opcion2'),
    document.getElementById('opcion3')
  ];
  const mensaje = document.getElementById('mensaje');

  function cargarPregunta() {
    const pregunta = preguntas[indicePregunta];
    imgElemento.src = pregunta.imagen;
    botones.forEach((btn, index) => {
        btn.textContent = pregunta.opciones[index];
        btn.onclick = () => verificarRespuesta(index);
    });
    mensaje.textContent = '';
  }

  function verificarRespuesta(opcionSeleccionada) {
    const pregunta = preguntas[indicePregunta];
    if (opcionSeleccionada === pregunta.respuestaCorrecta) {
        mensaje.textContent = "¡Correcto!";
        indicePregunta = (indicePregunta + 1) % preguntas.length;
        setTimeout(cargarPregunta, 3000);
    } else {
        mensaje.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
  }

  cargarPregunta();
});
