// 1
// let nome = prompt('Qual o seu nome?')
// alert("Olá," + nome)
//-------------------------------------------------------------------------
//2
// alert("Iremos somar dois números")
// let numberOne = prompt("Digite o primeiro número: ")
// let numberTwo = prompt("Digite o segundo número: ")
// let result = Number(numberOne) + Number(numberTwo)
// alert("Resultado: " + result)
//-------------------------------------------------------------------------
//3
// let firstNumber = prompt('Digite um número')
// let secondNumber = prompt('Agora mais um número')

// firstNumber = Number(firstNumber)
// secondNumber = Number(secondNumber)

// const sum = firstNumber + secondNumber
// const sub =  firstNumber - secondNumber
// const multi = firstNumber * secondNumber
// const div = firstNumber / secondNumber
// const restDiv = firstNumber % secondNumber

// alert('Soma: ' + sum)
// alert('Subtração: ' + sub)
// alert('multiplicação: ' + multi)
// alert('Divisão: ' + div)
// alert('Resto da divisão: ' + restDiv)
//-------------------------------------------------------------------------
//4
// let student = prompt('Qual o nome do(a) aluno(a)?')
// let grade1 = prompt('Qual a nota da primeira prova?')
// let grade2 = prompt('Qual a nota da segunda prova?')
// let grade3 = prompt('Qual a nota da terceira prova?')

// let average = (Number(grade1) + Number(grade2) + Number(grade3)) / 3
// let result = average > 6
// average = average.toFixed(2)

// if (result) {
//   alert("Parabéns, " + student + "! Sua média foi de: " + average)

// } else if (average < 3) {
//   alert('Reprovado')
// } else  {
//   alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average)
// }
//-------------------------------------------------------------------------
//5
// let items = [];

// for(let item = 0; item < 10; item++) {
//   let itemName = prompt('Acrescente o item ' + (item + 1))

//   items[item] = itemName
// }

// alert(items)
//-------------------------------------------------------------------------
//6
// let result = prompt('Advinhe o número que estou pensando! Está entre 0 e 10. Consegue?')
// const randomNumber =  Math.round(Math.random() * 10)

// let xAttempts = 1

// while(Number(result) !=  randomNumber) {
//   result = prompt('Errou!! Tente de novo:')
//   xAttempts++
// }

// alert(`Parabéns!! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)
//-------------------------------------------------------------------------
// let option
// let items = []

// while(option != 3) {

//   option = Number(prompt(
//     ` Olá usuário! Digite o número da opção desejada

//     1. Cadastrar um item na lista
//     2. Mostrar itens cadastrados
//     3. Sair do programa
//   `))

//   switch(option) {
//     case 1:
//       let item = prompt("Digite o nome do item")
//       items.push(item)
//     break

//     case 2:
//       if(items.length == 0) {
//         alert("Não existe itens cadastrados")
//       } else {
//         alert(items)
//       }
//     break

//     case 3:
//       alert("Até logo")
//     break
//     default: alert("Opção inválida. Tente novamente")
//   }
// }
//-------------------------------------------------------------------------
//8

// const patients = [
//   {
//     name: "Carlos",
//     age: 32,
//     weight: 98,
//     height: 182,
//   },
//   {
//     name: "Aline",
//     age: 19,
//     weight: 57,
//     height: 157,
//   },
//   {
//     name: "Anna",
//     age: 25,
//     weight: 64,
//     height: 167,
//   },
// ]

// // let patientsNames = []

// // for(let patient of patients) {
// //   patientsNames.push(patient.name)
// // }

// let patientsDescription = []

// for(let patient of patients) {
//   patientsDescription.push(`O paciente ${patient.name} tem ${patient.age} anos, esta pesando ${patient.weight} kilos e tem ${patient.height}cm de altura.`)
// }

// alert(patientsDescription)
//-------------------------------------------------------------------------
//9
// const patients = [
//   {
//     name: "Carlos",
//     age: 32,
//     weight: 98,
//     height: 182,
//   },
//   {
//     name: "Aline",
//     age: 19,
//     weight: 57,
//     height: 157,
//   },
//   {
//     name: "Anna",
//     age: 25,
//     weight: 64,
//     height: 167,
//   },
// ];

// function IMC(weight, height) {
//   return (weight / ((height / 100) ** 2)).toFixed(2)
// }

// function printPatientIMC(patient) {
//   return`
//     Paciente ${patient.name} possui o IMC de 
//     ${IMC(patient.weight, patient.height)}
//   `
// }

// for (let patient of patients) {
//   let IMCmessage = printPatientIMC(patient)
//   alert(IMCmessage)
// }