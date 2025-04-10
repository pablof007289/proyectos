const contenedor = document.getElementById("contenedor");

let numeros = [50, 90, 30, 100, 20, 60, 40, 70, 10, 80];
let iteraciones = 0;

function crearBarras() {
  contenedor.innerHTML = "";

  numeros.forEach(num => {
    const barra = document.createElement("div");
    barra.classList.add("barra");
    barra.style.height = `${num * 3}px`;
    barra.textContent = num;
    contenedor.appendChild(barra);
  });
}

crearBarras();

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function metodoBurbuja() {
  const barras = document.querySelectorAll(".barra");

  for (let i = 0; i < numeros.length - 1; i++) {
    let intercambio = false;
    for (let j = 0; j < numeros.length - i - 1; j++) {

      if (numeros[j] > numeros[j + 1]) {
        [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];

        barras[j].style.height = `${numeros[j] * 3}px`;
        barras[j].textContent = numeros[j];

        barras[j + 1].style.height = `${numeros[j + 1] * 3}px`;
        barras[j + 1].textContent = numeros[j + 1];

        intercambio = true;
        await delay(2500);
      }
    }

    if (intercambio) {
      iteraciones++;
      document.getElementById('iteraciones').textContent = `Iteraciones: ${iteraciones}`;
    }

    await delay(1000);
  }
}

function reiniciar() {
  numeros = [50, 90, 30, 100, 20, 60, 40, 70, 10, 80];
  iteraciones = 0;
  document.getElementById('iteraciones').textContent = `Iteraciones: 0`;
  crearBarras();
}

const botonreiniciar = document.createElement("button");
botonreiniciar.textContent = "Reiniciar";
botonreiniciar.classList.add("Iniciar-metodo");
botonreiniciar.onclick = reiniciar;
document.body.appendChild(botonreiniciar);
