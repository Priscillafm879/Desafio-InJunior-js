// Gerenciamento de jogadores de um time

// 1. Array vazio para armazenar os jogadores
let time = [];

// 2. Função para adicionar jogador
function adicionarJogador() {
  const nome = prompt("Digite o nome do jogador:");
  const idade = parseInt(prompt("Digite a idade do jogador:"), 10);
  const posicao = prompt("Digite a posição do jogador:");
  const pontuacao = parseFloat(prompt("Digite a pontuação do jogador:"));

  // Validação simples dos dados
  if (!nome || !Number.isInteger(idade) || idade <= 0 || !posicao || isNaN(pontuacao)) {
    console.log("Dados inválidos. Jogador não cadastrado.");
    return;
  }

  const jogador = {
    nome: nome,
    idade: idade,
    posicao: posicao,
    pontuacao: pontuacao
  };

  time.push(jogador);
  console.log(`Jogador ${nome} adicionado ao time.`);
}

// 3. Função para buscar jogadores por posição
function buscarPorPosicao() {
  const posicaoBuscada = prompt("Digite a posição para busca:");

  let encontrados = [];

  for (let i = 0; i < time.length; i++) {
    if (time[i].posicao === posicaoBuscada) {
      encontrados.push(time[i]);
    }
  }

  if (encontrados.length === 0) {
    console.log("Nenhum jogador encontrado para essa posição.");
  } else {
    console.log(`Jogadores da posição ${posicaoBuscada}:`);
    for (let i = 0; i < encontrados.length; i++) {
      console.log( `Nome: ${encontrados[i].nome}, Idade: ${encontrados[i].idade}, Pontuação: ${encontrados[i].pontuacao}`);
    }
  }
}

// 4. Função para listar todo o time
function listarTime() {
  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado no time.");
    return;
  }

  console.log("Lista de jogadores do time:");
  for (let i = 0; i < time.length; i++) {
    console.log(`Nome: ${time[i].nome}, Idade: ${time[i].idade}, Posição: ${time[i].posicao}, Pontuação: ${time[i].pontuacao}`);
  }
}

// 5. Função para calcular a pontuação média do time
function calcularPontuacaoMedia() {
  if (time.length === 0) {
    console.log("Não é possível calcular a média. Time vazio.");
    return;
  }

  let soma = 0;

  for (let i = 0; i < time.length; i++) {
    soma += time[i].pontuacao;
  }

  const media = soma / time.length;
  console.log(`Pontuação média do time: ${media.toFixed(2)}`);
}

// 6. Menu interativo
let opcao = "";

while (opcao !== "5") {
  opcao = prompt(
    "Escolha uma opção:\n" +
    "1 - Adicionar jogador\n" +
    "2 - Buscar por posição\n" +
    "3 - Listar time\n" +
    "4 - Calcular pontuação média\n" +
    "5 - Sair"
  );

  if (opcao === "1") {
    adicionarJogador();
  } else if (opcao === "2") {
    buscarPorPosicao();
  } else if (opcao === "3") {
    listarTime();
  } else if (opcao === "4") {
    calcularPontuacaoMedia();
  } else if (opcao === "5") {
    console.log("Programa encerrado.");
  } else {
    console.log("Opção inválida. Tente novamente.");
  }
}
