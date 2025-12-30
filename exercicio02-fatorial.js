//Cálculo de fatorial com validação

let continuar = "s";

while (continuar === "S" || continuar === "s") {
  let numero = parseInt(prompt("Digite um número inteiro positivo:"));

  // Validação do número
  while (!Number.isInteger(numero) || numero <= 0) {
    alert("Entrada inválida! Digite um número inteiro positivo.");
    numero = parseInt(prompt("Digite um número inteiro positivo:"));
  }

  // Cálculo do fatorial
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  // Exibe o resultado
  console.log(`O fatorial de ${numero} é ${fatorial}`);

  // Pergunta se deseja continuar
  continuar = prompt("Deseja calcular o fatorial de outro número? (S/N)");

  // Validação da resposta
  while (
    continuar !== "S" &&
    continuar !== "s" &&
    continuar !== "N" &&
    continuar !== "n"
  ) {
    alert("Resposta inválida! Digite S para sim ou N para não.");
    continuar = prompt("Deseja calcular o fatorial de outro número? (S/N)");
  }
}

console.log("Programa encerrado.");
