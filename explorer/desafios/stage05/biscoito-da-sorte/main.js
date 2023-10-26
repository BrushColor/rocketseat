const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2") 
const buttonTry = document.querySelector("#buttonTry")
const clickOnCookie = document.querySelector("#closedCookie")

let phrase = [
  'Valorize as pequenas conquistas!',
  'A vida é curta demais para não mudar.',
  'Tentar é a única maneira de saber se vai dar certo.',
  'Motivação é aquilo que te faz começar. Habito é aquilo que te faz continuar.',
  'Mesmo que nem todo dia seja bom, há algo de bom todo dia.',
  'Invista em você! Seja feliz e faça o bem. Mas não seja bobo.',
  'Não importa o que você decidiu. O que importa é que isso te faz feliz.',
  'Você não pode ser um homem ruim e esperar que coisas boas aconteçam com você.'
]

let randomPhrase = Math.round(Math.random() * 10)

screen2.querySelector()

function generatePhrase() {
  toggleScreen()
  clickOnCookie.addEventListener('click', generatePhrase)
  document.addEventListener('keydown', pressEnterKey)
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function buttonTry(event){
  event.preventDefault()
  toggleScreen()
}

