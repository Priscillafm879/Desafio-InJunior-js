// Simulação de fila de atendimento

// Array que representa a fila (inicialmente vazia)
let fila = [];

// Variável para armazenar a opção escolhida pelo usuário
let opcao = "";

// Loop - Continua rodando até o usuário escolher a opção 3 (encerrar)
while (opcao !== "3") {

  // Menu de opções exibido ao usuário
  opcao = prompt(
    "Escolha uma opção:\n" +
    "1 - Adicionar pessoa na fila\n" +
    "2 - Atender próxima pessoa\n" +
    "3 - Encerrar"
  );

  // Opção 1: adicionar pessoa na fila
  if (opcao === "1") {
    const nome = prompt("Digite o nome da pessoa:");

    // Adiciona a pessoa ao final da fila
    fila.push(nome);

    console.log(`Pessoa adicionada à fila: ${nome}`);
    console.log("Fila atual:", fila);

  // Opção 2: atender a próxima pessoa da fila
  } else if (opcao === "2") {

    // Verifica se a fila está vazia
    if (fila.length === 0) {
      console.log("Fila vazia. Nenhuma pessoa para atender.");
    } else {
      // Remove a primeira pessoa da fila (FIFO)
      const atendido = fila.shift();

      console.log(`Pessoa atendida: ${atendido}`);
      console.log("Fila atual:", fila);
    }

  // Opção 3: encerrar o programa
  } else if (opcao === "3") {
    console.log("Programa encerrado.");

  // Qualquer outra opção é considerada inválida
  } else {
    console.log("Opção inválida. Tente novamente.");
  }
}
