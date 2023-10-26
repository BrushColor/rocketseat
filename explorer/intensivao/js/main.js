const hello = "Hello World!!!"
console.log(hello)

const num1 = 29
const num2 = 34
const result =  Number(num1) + Number(num2)
console.log(`A soma de ${num1} e ${num2} é ${result}!`)

const aNumber = 13
if ( typeof aNumber === "number"){
  console.log("É um número.")
}else {
  console.log("Não é um número.")
}

const String = false
if (typeof String === "string") {
  console.log("É uma string.")
}else {
  console.log("Não é uma string.")
}

const girafa = true
if (typeof girafa === "boolean") {
  console.log("É um booleano.")
} else {
  console.log("Não é um booleano.")
}

const sub1 = 153
const sub2 = 37
const subResult = Number(sub1) - Number(sub2)
console.log(`A subtração de ${sub1} por ${sub2} da o valor de: ${subResult}.`)

const mult1 = 25
const mult2 = 2
const multResult = Number(mult1) * Number(mult2)
console.log(`O resultado desta multiplicação ${mult1} * ${mult2} é: ${multResult}.`)

const div1 = 12
const div2 = 4
const divResult = Number(div1) / Number(div2)
console.log(`Dividindo ${div1} por ${div2} temos o resultado de: ${divResult}.`)

const par =  22
if(par % 2 === 0){
  console.log("É um número par.")
}else {
  console.log("Não é um número par.")
}

const impar = 33
if (impar % 2 !== 0) {
  console.log("É um número ímpar.")
} else {
  console.log("Não é um número ímpar.")
}
