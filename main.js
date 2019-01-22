const date = new Date()

const hours = date.getHours()
const mins = date.getMinutes()
const theDate = date.getDate()
const month = date.getMonth()

const monthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

let monthDisplayed = monthsArray[parseInt(month)]
const timeContainer = document.createElement("div")
timeContainer.id = "time-container"
timeContainer.textContent = `${monthDisplayed} ${theDate} ${hours}:${mins}`
document.getElementById("output").appendChild(timeContainer)

let buttonTorefresh = document.createElement("button")
buttonTorefresh.textContent = "Refresh Time"
document.getElementById("output").appendChild(buttonTorefresh)
buttonTorefresh.addEventListener("click", () => {
  console.log("clickdy")
  location.reload()
})