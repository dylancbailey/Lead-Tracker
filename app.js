let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Render leads
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href="https://${leads[i]}" target="_blank">${leads[i]}</a>
            </li>`
    }
    ulEl.innerHTML = listItems
}

// Save Input
inputBtn.addEventListener("click", function() {
    if (inputEl.value != "") {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("leads", JSON.stringify(myLeads))
        render(myLeads)
    }
})

// Save Tab
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("leads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

// Delete All
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
