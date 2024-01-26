let numeroSecreto = 0;
let intentos = 1; // Comenzamos en 1 porque el primer intento ya cuenta.
let numerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 3;

// Función para asignar texto a un elemento HTML
function asignarTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}

// Función para verificar el intento del usuario
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTexto('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTexto('p', 'El número es menor');
    } else {
      asignarTexto('p', 'El número es mayor');
    }

    intentos++;

    if (intentos > maximosIntentos) {
      asignarTexto('p', `Se agotaron los ${maximosIntentos} intentos. El número secreto era ${numeroSecreto}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      limpiarCaja();
    }
  }
}

// Función para limpiar la caja de entrada
function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

// Función para generar y devolver un número secreto no repetido
function adivinaNumeroSecreto() {
  let numeros = Array.from({ length: numeroMaximo }, (_, index) => index + 1);
  shuffleArray(numeros);

  return numeros.shift();
}

// Función para barajar un array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Función para configurar las condiciones iniciales del juego
function condicionesIniciales() {
  asignarTexto('h1', 'Juego del número secreto');
  asignarTexto('p', `Indica un número del 1 al ${numeroMaximo}. Tienes ${maximosIntentos} intentos.`);
  numerosSorteados = [];
  numeroSecreto = adivinaNumeroSecreto();
  intentos = 1;
}



// Función para reiniciar el juego
function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled', true);
}

// Configurar las condiciones iniciales del juego al cargar la página
condicionesIniciales();




