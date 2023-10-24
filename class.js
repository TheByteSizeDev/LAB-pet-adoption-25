const pies = [{
    id: 1,
    name: "Buttermilk Pie",
    crustType: "Best crust",
    filling: "buttermilk",
    vegan: false,
    bakeTemp: 400,
    skillLevel: "easy"
},
{
    id: 2,
    name: "Chess Pie",
    crustType: "Bad crust",
    filling: "buttermilk",
    vegan: true,
    bakeTemp: 400,
    skillLevel: "medium"
},
{
    id: 3,
    name: "Apple Pie",
    crustType: "Sugar crust",
    filling: "buttermilk",
    vegan: false,
    bakeTemp: 400,
    skillLevel: "medium"
},
{
    id: 4,
    name: "Cranberry Pie",
    crustType: "cracker crust",
    filling: "buttermilk",
    vegan: true,
    bakeTemp: 400,
    skillLevel: "hard"
}]


const renderToDom = (array) => {

    let domString = ""
    
    for(object of array){
        const show = object.vegan ? "" : "none"
        domString += `<div class="card" style="width: 15rem;">
        <div class="card-body">
        <h5 class="card-title">${object.name}</h5>
        <p style="display:${show};">🌿</p>
        <h6 class="card-subtitle mb-2 text-body-secondary">${object.filling}</h6>
        <p class="card-text">${object.bakeTemp}</p>
        <button class="btn btn-danger" id="delete--${object.id}">Delete</button>
        </div>
        </div>`
    }

    app.innerHTML = domString
}

// Filter for pies
const filter = (type) => {
    
    const filteredArray = []
    for(pie of pies){
        if(pie.skillLevel === type){
            filteredArray.push(pie)
        }
    }

    renderToDom(filteredArray)
}

// Function to intialize all of our events
const events = () => {
    // organized all of our querySelectors
    const app = document.querySelector("#app")
    const form = document.querySelector("form")
    const filterButtons = document.querySelector("#filter-buttons")

    // Submit event listener with an anonymous callback function: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
    form.addEventListener('submit', (event) => {
        event.preventDefault()
    
        const newPieObj ={
            id: pies.length + 1,
            name: document.querySelector("#pieName").value,
            crustType: document.querySelector("#pieCrust").value,
            filling: document.querySelector("#pieFilling").value,
            vegan: document.querySelector("#isVegan").checked,
            bakeTemp: document.querySelector("#pieTemp").value,
            skillLevel: document.querySelector('input[name="skill-level"]:checked').id
        }
    
        pies.push(newPieObj)
        renderToDom(pies)
        form.reset()
    })

    // Event listener for our delete
    app.addEventListener("click", (event) => {

        if(event.target.id.includes("delete")){
    
            const [, id] = event.target.id.split("--")
    
    
            const index = pies.findIndex(obj => obj.id === Number(id))
    
    
            pies.splice(index, 1)
    
    
            renderToDom(pies)
        }
    })

    // Event listener for our filters
    filterButtons.addEventListener("click", (event) => {
        const id = event.target.id
        const possibletypes = ["easy", "medium", "hard"]
    
        if(id === "all"){
            renderToDom(pies)
        } else if(possibletypes.includes(id)){
            filter(id)
        }
    })
}

// Our init function, starts our app
const startApp = () => {
    renderToDom(pies)
    events()
}

startApp()