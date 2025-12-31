//Sequência de Fibonacci com recursão

// Entrada do número de termos
let n = parseInt(prompt("Digite um número inteiro para exibir a quantidade de termos da sequência de Fibonacci:"), 10);

// Validação da entrada
while (!Number.isInteger(n) || n < 0) {
  alert("Entrada inválida! Digite um número inteiro maior ou igual a zero.");
  n = parseInt(prompt("Digite a quantidade de termos da sequência de Fibonacci:"), 10);
}

// Função recursiva para calcular Fibonacci
function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// Exibe os n primeiros termos
let resultado = [];

for (let i = 0; i < n; i++) {
  resultado.push(fibonacci(i));
}

console.log(`Os ${n} primeiros termos da sequência de Fibonacci:`);
console.log(resultado.join(", "));
