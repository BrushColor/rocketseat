let firstNumber = prompt("Digite um número");
let secondNumber = prompt("Agora digite outro número");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

let sum = firstNumber + secondNumber;
alert("O resultado da adição foi: " + sum);

let sub = firstNumber - secondNumber;
alert("O resultado da subtração é: " + sub);

let mult = firstNumber * secondNumber;
alert("Já o resultado da multiplicação foi: " + mult);

let div = firstNumber / secondNumber;
alert("Agora o resultado da divisão é: " + div.toFixed(2));

let rem = firstNumber % secondNumber;
alert("E o resto da divisão ficou: " + rem);

if (sum % 2 == 0) {
  alert("A soma dos dois números que você escolheu deu par!");
} else {
  alert("A soma dos dois números que você escolheu foi ímpar!");
}

if (firstNumber == secondNumber) {
  alert("Que legal! Os dois números que você escolheu são iguais!!")
} else {
  alert("Você escolheu números diferentes para esta brincadeira, não é?")
}
