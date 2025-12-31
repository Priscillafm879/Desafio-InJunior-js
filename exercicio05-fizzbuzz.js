//FizzBuzz

// Entrada do número
let numero = parseInt(prompt("Digite um número inteiro:"),10);

// Validação da entrada
while (!Number.isInteger(numero)) {
  alert("Entrada inválida! Digite um número inteiro.");
  numero = parseInt(prompt("Digite um número inteiro:"),10);
}

// Verificações
if (numero % 3 === 0 && numero % 5 === 0) {
  console.log("fizzbuzz");
} else if (numero % 3 === 0) {
  console.log("fizz");
} else if (numero % 5 === 0) {
  console.log("buzz");
}
