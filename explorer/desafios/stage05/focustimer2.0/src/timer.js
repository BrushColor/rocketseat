const play = document.getElementsByClassName("ph-play-circle")[0]
const stop = document.getElementsByClassName("ph-stop-circle")[0]
const elMinutes = document.getElementById("minutes") 
const elSeconds = document.getElementById("seconds")

let isRunning = false

function reset() {
  elMinutes.textContent = "25"
  elSeconds.textContent = "00"
}

play.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true
    countdown()
  }
})  

stop.addEventListener("click", () => {
  isRunning = false
})

function countdown() {
  if (isRunning) {
    let seconds = Number(elSeconds.textContent) 
    let minutes = Number(elMinutes.textContent)

    seconds--
    if(seconds < 0) {
      seconds = 59
      minutes--
    }

    if(minutes < 0) {
      isRunning = false
      reset()
      return
    }
    
    elMinutes.textContent = String(minutes).padStart(2, "0")
    elSeconds.textContent = String(seconds).padStart(2, "0")

    setTimeout(() => countdown(), 1000)
  }
}
