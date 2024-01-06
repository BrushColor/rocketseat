const addTime = document.getElementsByClassName("ph-plus-circle")[0]
const decrease = document.getElementsByClassName("ph-minus-circle")[0]
const reduceTime = document.getElementsByClassName("ph-minus-circle")[0]
const elMinutes = document.getElementById("minutes")

addTime.addEventListener("click", () => {
  let newMinutes = Number(elMinutes.textContent) + 5
  elMinutes.textContent = newMinutes.toString()
})

decrease.addEventListener("click", () => {
  let newMinutes = Number(elMinutes.textContent) - 5
  
  if (newMinutes >= 0) {
    elMinutes.textContent = newMinutes.toString()
  }
})



