const MAX = 4;
const MIN = 3;

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numContainer = document.querySelector("#numero");
let tiempo = 0;
let tiempoRandom;
let intervalo = 10;

/* 
t is current time
b is start value
c is change in value
d is duration 
*/
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

function numeroRandom(MIN, MAX) {
  return Math.random() * (MAX - MIN) + MIN;
}

function iniciar() {
  intervalo = 100;
  tiempoRandom = numeroRandom(MIN, MAX);

  setInterval(() => {
    intervalo = intervalo + 10;
    console.log(numeros[Math.floor(Math.random() * numeros.length)]);
    console.log(intervalo);
  }, intervalo);

  /*   numeros.forEach((e) => {
    setInterval(() => {
      console.log(e);
    }, 2000);
  }); */
}
