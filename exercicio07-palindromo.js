
//Verificação de palíndromo

// Entrada da frase
let frase = prompt("Digite uma frase:");

// Remove espaços e converte para minúsculas
let fraseTratada = frase
  .toLowerCase() // transforma tudo em minúsculo
  .split(" ")   // remove os espaços ao quebrar a string
  .join("");   // junta as letras novamente numa string

// Inverte a frase tratada
let fraseInvertida = fraseTratada
  .split("")    // transforma a string em array de letras
  .reverse()    // inverte a ordem das letras no array
  .join("");    // junta novamente em uma string

// Verificação
if (fraseTratada === fraseInvertida) {
  console.log("A frase é um palíndromo.");
} else {
  console.log("A frase não é um palíndromo.");
}
