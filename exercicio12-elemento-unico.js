// Encontrar elemento único no array

// Array de números (exemplo)
const numeros = [2, 3, 5, 4, 5, 3, 4];

// Variável para armazenar o elemento único
let elementoUnico = null;

// Percorre o array principal
for (let i = 0; i < numeros.length; i++) {
  let contador = 0;

  // Conta quantas vezes o número aparece no array
  for (let j = 0; j < numeros.length; j++) {
    if (numeros[i] === numeros[j]) {
      contador++;
    }
  }

  // Se apareceu apenas uma vez, é o elemento único
  if (contador === 1) {
    elementoUnico = numeros[i];
    break;
  }
}

// Exibe o resultado
console.log("Array informado:", numeros);
console.log("Elemento único:", elementoUnico);
