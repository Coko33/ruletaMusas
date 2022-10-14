const MAX = 1;
const MIN = 13;
const MIN_DEG = 0;
const MAX_DEG = 360;
const VUELTAS = 100;
let numContainer = document.getElementById("numero");
let juego = document.getElementById("juego");
let figusContainer = document.getElementById("containerFigus");
let tirar = document.getElementById("ini");
let figu1 = document.getElementById("figu1");
let figu2 = document.getElementById("figu2");
let figu3 = document.getElementById("figu3");
let figu4 = document.getElementById("figu4");
let figu5 = document.getElementById("figu5");
let figu6 = document.getElementById("figu6");
let figu7 = document.getElementById("figu7");
let figu8 = document.getElementById("figu8");
let figu9 = document.getElementById("figu9");
let figu10 = document.getElementById("figu10");
let figu11 = document.getElementById("figu11");
let figu12 = document.getElementById("figu12");
let figu13 = document.getElementById("figu13");
let figu14 = document.getElementById("figu14");
let figu15 = document.getElementById("figu15");
let figu16 = document.getElementById("figu16");
let figu17 = document.getElementById("figu17");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var numerosDadoPhyton = [
  "\u2680",
  "\u2681",
  "\u2682",
  "\u2683",
  "\u2684",
  "\u2685",
];
var numerosDadoHTML = [
  "&#9856",
  "&#9857",
  "&#9858",
  "&#9859",
  "&#9860",
  "&#9861",
];

var rolando = null;
var counter = 1;
var ms = 50;
var indexZ = 1;

function numeroRandom() {
  return Math.floor(Math.random() * (MAX - MIN) + MIN);
}
function gradosRandom() {
  return Math.floor(Math.random() * (MAX_DEG - MIN_DEG) + MIN_DEG);
}

function mostrarFigus(elNum, counter) {
  figu1.style.display = "none";
  figu2.style.display = "none";
  figu3.style.display = "none";
  figu4.style.display = "none";
  figu5.style.display = "none";
  figu6.style.display = "none";
  figu7.style.display = "none";
  figu8.style.display = "none";
  figu9.style.display = "none";
  figu10.style.display = "none";
  figu11.style.display = "none";
  figu12.style.display = "none";
  figu13.style.display = "none";
  figu14.style.display = "none";
  figu15.style.display = "none";
  figu16.style.display = "none";
  figu17.style.display = "none";
  if (counter <= VUELTAS) {
    switch (elNum) {
      case 1:
        figu1.style.display = "block";
        break;
      case 2:
        figu2.style.display = "block";
        break;
      case 3:
        figu3.style.display = "block";
        break;
      case 4:
        figu4.style.display = "block";
        break;
      case 5:
        figu5.style.display = "block";
        break;
      case 6:
        figu6.style.display = "block";
        break;
      case 7:
        figu7.style.display = "block";
        break;
      case 8:
        figu8.style.display = "block";
        break;
      case 9:
        figu9.style.display = "block";
        break;
      case 10:
        figu10.style.display = "block";
        break;
      case 11:
        figu11.style.display = "block";
        break;
      case 12:
        figu12.style.display = "block";
        break;
      case 13:
        figu13.style.display = "block";
        break;
      case 14:
        figu14.style.display = "block";
        break;
      case 15:
        figu15.style.display = "block";
        break;
      case 16:
        figu16.style.display = "block";
        break;
      case 17:
        figu17.style.display = "block";
        break;
    }
  }
  if (counter == VUELTAS) {
  }
}

function mostrarDado(elNum, counter) {
  numContainer.innerHTML = numerosDadoHTML[elNum - 1];
  counter < VUELTAS
    ? (numContainer.style.transform = `rotate(${gradosRandom()}deg)`)
    : (numContainer.style.transform = "rotate(0deg)");
}

function tirarDado() {
  elNum = numeroRandom();
  counter = counter + 1;
  indexZ = indexZ + 1;
  mostrarFigus(elNum, counter);
  /* mostrarDado(elNum, counter); */
}

function mostrarJuego() {
  juego.style.display = "flex";
}

window.addEventListener("load", function () {
  setTimeout(function () {
    mostrarJuego();
  }, 3300);

  ini.addEventListener("click", function () {
    ini.style.display = "none";
    if (rolando) return;
    rolando = setTimeout(function tick() {
      if (counter < VUELTAS) {
        tirarDado();
        console.log(indexZ);
        if (counter > VUELTAS / 2) {
          ms = 100;
        }
        if (counter > VUELTAS / 1.3) {
          ms = 150;
        }
        if (counter > VUELTAS / 1.1) {
          ms = 200;
        }
        rolando = setTimeout(tick, ms);
      } else {
        clearTimeout(rolando);
        rolando = null;
        counter = 1;
        ms = 50;
      }
    }, ms);
  });
});
/* window.addEventListener("load", function () {
  ini.addEventListener("click", function () {
    if (rolando) return;

    rolando = setInterval(function () {
      if (counter < VUELTAS) tirarDado();
      else {
        clearInterval(rolando);
        rolando = null;
        counter = 1;
      }
    }, ms);
  });
}); */

/* let tiempo = 0;
let tiempoRandom;
let intervalo = 10;

intervalo = 100;
tiempoRandom = numeroRandom(MIN, MAX);
const iniciar = () => (ruleta = setInterval(() => start, intervalo));

function start() {
  intervalo = intervalo + 10;
  console.log(numeros[Math.floor(Math.random() * numeros.length)]);
  console.log(intervalo);
}

function stop() {
  clearInterval(ruleta);
} */

/* 
t is current time
b is start value
c is change in value
d is duration 

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
*/
//forEach()
