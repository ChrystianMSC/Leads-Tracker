const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

let myLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage != null) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){

    let listItems  = ""
    for (let i = 0; i < leads.length; i++) {
        listItems  += 
        `
        <li>
            <a href="http://${leads[i]}" target="_blank">
                ${leads[i]}
            </a>
        </li>
        ` 
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})