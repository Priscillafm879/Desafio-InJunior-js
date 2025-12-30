//Conversão de moedas

// Taxas de câmbio (constantes)
const TAXA_EURO = 6.10;
const TAXA_DOLAR = 5.70;

// Entrada do valor em reais
let valorReais = parseFloat(prompt("Digite o valor em reais (R$):"));

// Validação da entrada
while (isNaN(valorReais) || valorReais <= 0) {
  alert("Valor inválido! Digite um valor positivo.");
  valorReais = parseFloat(prompt("Digite o valor em reais (R$):"));
}

// Conversões
const valorEuro = valorReais / TAXA_EURO;
const valorDolar = valorReais / TAXA_DOLAR;

// Saída dos resultados
console.log(`Valor em reais: R$ ${valorReais.toFixed(2)}`);
console.log(`Valor em euro: € ${valorEuro.toFixed(2)}`);
console.log(`Valor em dólar: US$ ${valorDolar.toFixed(2)}`);
