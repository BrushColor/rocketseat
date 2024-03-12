const questions = [
  {
    question: "Qual atributo HTML5 é usado para especificar que um campo de entrada é obrigatório?",
    response: ["required", "mandatory", "necessary"],
    correct: 0,
  },

  {
    question: "Qual elemento HTML5 é usado para agrupar elementos de formulário?",
    response: ["<fieldset>", "<group>", "<formgroup>"],
    correct: 0,
  },

  {
    question: "Qual atributo HTML5 é usado para especificar a URL da imagem?",
    response: ["url", "link", "src"],
    correct: 2,
  },

  {
    question: "Qual é a propriedade CSS usada para centralizar um elemento horizontalmente?",
    response: ["align-center", "text-align", "center"],
    correct: 1,
  },

  {
    question: "Qual é a propriedade CSS usada para definir a opacidade de um elemento?",
    response: ["opacity", "transparent", "alpha"],
    correct: 0,
  },

  {
    question: "Qual é a forma correta de declarar uma variável em JavaScript?",
    response: ["var myVar;", "variable myVar;", "let myVar;"],
    correct: 2,
  },

  {
    question: "O que o método 'parseInt()' faz em JavaScript?",
    response: [
      "Converte uma string para um número inteiro.",
      "Converte um número para uma string.",
      "Converte uma string para um número decimal.",
    ],
    correct: 0,
  },

  {
    question: "Qual é o operador de igualdade estrita em JavaScript?",
    response: ["===", "==", "="],
    correct: 0,
  },

  {
    question: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
    response: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
    ],
    correct: 0,
  },

  {
    question: "Qual destes não é um tipo de dados em JavaScript?",
    response: ["Number", "Boolean", "Character"],
    correct: 2,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const correctAnswer = new Set()
const totalQuestions = questions.length
const showHits = document.querySelector("#hits span")

for (const item of questions) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.question

  for (let response of item.response) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = response
    dt.querySelector("input").setAttribute(
      "name",
      "question-" + questions.indexOf(item)
    )
    dt.querySelector("input").value = item.response.indexOf(response)
    dt.querySelector("input").onchange = (event) => {
      const isCorrect = event.target.value == item.correct

      correctAnswer.delete(item)
      if(isCorrect) {
        correctAnswer.add(item)
      }
    showHits.textContent = `${correctAnswer.size} de ${totalQuestions}`
    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()
  quiz.appendChild(quizItem)
}


