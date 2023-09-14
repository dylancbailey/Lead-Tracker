let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// Save Input
inputBtn.addEventListener("click", function() {
    if (inputEl.value != "") {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("leads", JSON.stringify(myLeads))
        renderLeads()
    }
})

// Delete All
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

// Render leads
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href="https://${myLeads[i]}" target="_blank">${myLeads[i]}</a>
            </li>`
    }
    ulEl.innerHTML = listItems
}
