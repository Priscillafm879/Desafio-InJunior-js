// Solicita os coeficientes ao usuário e converte a entrada de string para número
const a = Number(prompt("Digite o valor de a:"));
const b = Number(prompt("Digite o valor de b:"));
const c = Number(prompt("Digite o valor de c:"));

// Calcula o discriminante (delta)
const delta = b * b - 4 * a * c;

// Exibe o valor de delta
console.log("Delta =", delta);

// Verifica o número de raízes
if (delta > 0) {
  // Calcula as raízes reais e distintas
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log("A equação possui duas raízes reais:");
  console.log("x1 =", x1);
  console.log("x2 =", x2);

} else if (delta === 0) {
  // Uma raiz real (raiz dupla)
  const x = -b / (2 * a);

  console.log("A equação possui uma raiz real:");
  console.log("x =", x);

} else {
  // Nenhuma raiz real
  console.log("A equação não possui raízes reais.");
}
