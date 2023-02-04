const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

let myLeads = []


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){

    let listItems  = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems  += 
        `
        <li>
            <a href="http://${myLeads[i]}" target="_blank">
                ${myLeads[i]}
            </a>
        </li>
        ` 
    }
    console.log(listItems)
    ulEl.innerHTML = listItems
}


