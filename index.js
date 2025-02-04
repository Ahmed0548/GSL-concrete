
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let options = { year: 'numeric', month: '2-digit', day: '2-digit' }

function increment() {
    let userInput = document.getElementById("date").value
    let currentDate = new Date(userInput)
    currentDate.setDate(currentDate.getDate() + 28)
    countEl.textContent = currentDate.toLocaleDateString('en-GB', options)
    saveEl.textContent = "BREAK DATE IS " + currentDate.toLocaleDateString('en-GB', options)
}
function save() {
    let userInput = document.getElementById("date").value
    let currentDate = new Date(userInput)
    
   currentDate.setDate(currentDate.getDate() + 7)
   countEl.textContent = currentDate.toLocaleDateString('en-GB', options)
   saveEl.textContent = "BREAK DATE IS " + currentDate.toLocaleDateString('en-GB', options)
}
    
