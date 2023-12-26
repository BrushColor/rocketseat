const buttonTheme = document.getElementById("buttonTheme")

const buttonForest = document.getElementById("forest")
const buttonRain = document.getElementById("rain")
const buttonCoffeeShop = document.getElementById("coffee-shop")
const buttonFireplace = document.getElementById("fireplace")

let currentAudio = null

buttonForest.addEventListener("click", () =>
  toggleAudio("audioForest", "forest")
)
buttonRain.addEventListener("click", () => toggleAudio("audioRain", "rain"))
buttonCoffeeShop.addEventListener("click", () =>
  toggleAudio("audioCoffeeShop", "coffee-shop")
)
buttonFireplace.addEventListener("click", () =>
  toggleAudio("audioFireplace", "fireplace")
)

function toggleAudio(audioId, theme) {
  const audio = document.getElementById(audioId)

  if (currentAudio) {
    currentAudio.pause()
  }

  if (buttonTheme.className === theme) {
    buttonTheme.className = "default"
  } else {
    buttonTheme.className = theme
    audio.play()
    currentAudio = audio
  }
}