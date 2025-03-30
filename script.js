const contenedor = document.getElementById("contenedor");

let numeros = [40, 20, 60, 10, 30, 50];  

function crearBarras() {
  contenedor.innerHTML = "";  

  numeros.forEach(num => {
    const barra = document.createElement("div");
    barra.classList.add("barra");
    barra.style.height = `${num * 4}px`; 
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
      for (let j = 0; j < numeros.length - i - 1; j++) {
  
        if (numeros[j] > numeros[j + 1]) {

          [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
  
          barras[j].style.height = `${numeros[j] * 4}px`;
          barras[j].textContent = numeros[j];
  
          barras[j + 1].style.height = `${numeros[j + 1] * 4}px`;
          barras[j + 1].textContent = numeros[j + 1];
  
          await delay(2500);
        }
      }
    }
  }
