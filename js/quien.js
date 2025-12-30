const integrantes = [
    { nombre: 'Pepe', img: 'https://images.unsplash.com/photo-1590080873512-0c3f7a0c702f?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80' },
    { nombre: 'Juan', img: 'https://images.unsplash.com/photo-1591631834110-9984a6fa5b4f?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80' },
    { nombre: 'Carlos', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80' },
    { nombre: 'Luis', img: 'https://images.unsplash.com/photo-1544725176-7c40e5a84b8f?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80' }
  ];

  let respuestaCorrecta = null;
  let preguntaActual = '';
  let btn = document.getElementById("btn-sig");
  
    btn.addEventListener("click", nuevaPregunta());
  
    function nuevaPregunta() {
    document.getElementById('feedback').innerHTML = '';
    // Escoger un integrante aleatorio para preguntar
    const indicePreguntar = Math.floor(Math.random() * integrantes.length);
    const integrantePregunta = integrantes[indicePreguntar];
    preguntaActual = integrantePregunta.nombre;

    // Mostrar la pregunta
    document.getElementById('pregunta').innerText = `¿Quién es ${preguntaActual}?`;

    // Crear opciones
    const opciones = [...integrantes];
    // Asegurarse que la respuesta correcta esté en las opciones
    respuestaCorrecta = integrantePregunta;

    // Sacar 2 opciones más diferentes
    const otrasOpciones = opciones.filter((_, index) => index !== indicePreguntar);
    const seleccionadas = [];
    seleccionadas.push(respuestaCorrecta);
    while (seleccionadas.length < 3 && otrasOpciones.length > 0) {
      const randIndex = Math.floor(Math.random() * otrasOpciones.length);
      seleccionadas.push(otrasOpciones.splice(randIndex, 1)[0]);
    }

    // Barajar las opciones
    for (let i = seleccionadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [seleccionadas[i], seleccionadas[j]] = [seleccionadas[j], seleccionadas[i]];
    }

    // Mostrar las imágenes
    const contenedor = document.getElementById('contenedor-imagenes');
    contenedor.innerHTML = '';
    seleccionadas.forEach((opcion) => {
      const img = document.createElement('img');
      img.src = opcion.img;
      img.alt = opcion.nombre;
      img.onclick = () => verificarRespuesta(opcion);
      contenedor.appendChild(img);
    });
  }

  // Función para verificar la respuesta
  function verificarRespuesta(opcion) {
    const feedback = document.getElementById('feedback');
    if (opcion.nombre === respuestaCorrecta.nombre) {
      feedback.innerHTML = '¡Correcto! 🎉';
    } else {
      feedback.innerHTML = `Incorrecto. La respuesta correcta era: ${respuestaCorrecta.nombre}`;
    }
  }

  // Cargar una primera pregunta al cargar la página
  window.onload = nuevaPregunta;