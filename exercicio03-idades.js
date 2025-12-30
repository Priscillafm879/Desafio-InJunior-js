//Verificação de maioridade

// Solicita o ano atual ao usuário
let anoAtual = parseInt(prompt("Digite o ano atual:"), 10);

// Validação do ano atual
while (!Number.isInteger(anoAtual) || anoAtual <= 0) {
  alert("Ano inválido! Digite um ano válido.");
  anoAtual = parseInt(prompt("Digite o ano atual:"), 10);
}

// Array de anos de nascimento
const anosNascimento = [2013, 2010, 1998, 2015, 1990, 1987, 1998];

// Função que verifica as idades
function verificarIdades(anos) {
  const resultado = [];

  for (let i = 0; i < anos.length; i++) {
    const idade = anoAtual - anos[i];

    if (idade >= 18) {
      resultado.push("maior");
      console.log(`Pessoa ${i + 1}: Maior de idade`);
    } else {
      resultado.push("menor");
      console.log(`Pessoa ${i + 1}: Menor de idade`);
    }
  }

  return resultado;
}

// Chamada da função
verificarIdades(anosNascimento);
