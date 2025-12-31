// Verificar números em ordem crescente

// Solicita a quantidade de números
let quantidade = parseInt(prompt("Quantos números você deseja inserir?"));

// Validação da quantidade
while (!Number.isInteger(quantidade) || quantidade <= 0) {
  alert("Digite uma quantidade válida.");
  quantidade = parseInt(prompt("Quantos números você deseja inserir?"));
}

// Array para armazenar os números
let numeros = [];

// Leitura dos números
for (let i = 0; i < quantidade; i++) {
  let valor = parseInt(prompt(`Digite o ${i + 1}º número:`));

  while (!Number.isInteger(valor)) {
    alert("Digite um número inteiro válido.");
    valor = parseInt(prompt(`Digite o ${i + 1}º número:`));
  }

  numeros.push(valor);
}

// Contador de números em ordem crescente
let contador = 0;

// Verifica pares consecutivos
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeros[i - 1]) {
    contador++;
  }
}

// Exibe o resultado
console.log("Vetor informado:", numeros);
console.log(`Quantidade de números em ordem crescente: ${contador}`);
