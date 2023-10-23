
const pies = [{
    id: 1,
    name: "Buttermilk Pie",
    crustType: "Best crust",
    filling: "buttermilk",
    vegan: false,
    bakeTemp: 400,
},
{
    id: 2,
    name: "Chess Pie",
    crustType: "Bad crust",
    filling: "buttermilk",
    vegan: true,
    bakeTemp: 400,
},
{
    id: 3,
    name: "Apple Pie",
    crustType: "Sugar crust",
    filling: "buttermilk",
    vegan: false,
    bakeTemp: 400,
},
{
    id: 4,
    name: "Cranberry Pie",
    crustType: "cracker crust",
    filling: "buttermilk",
    vegan: true,
    bakeTemp: 400,
}]
// Select our HTML div
const app = document.querySelector("#app")

const deletePie = (event) => {

    if(event.target.id.includes("delete")){
        // Do Our Delete Logic
        // determine which object I'm delete by the id
        // id = "delete--3"
        const [, id] = event.target.id.split("--")

        // Identify where in the array that object is
        const index = pies.findIndex(obj => obj.id === Number(id))

        // Remove the object from the array
        pies.splice(index, 1)

        // Re-render with the array
        renderToDom(pies)
    }
}

app.addEventListener("click", deletePie)


// Function to render cards to DOM that takes an array
const renderToDom = (array) => {

    // Create our domstring so we can push our cards to it
    let domString = ""
    // Loop over the array and create our pie cards
    for(object of array){
        domString += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${object.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${object.filling}</h6>
        <p class="card-text">${object.bakeTemp}</p>
        <button class="btn btn-danger" id="delete--${object.id}">Delete</button>
        </div>
        </div>` 
    }

    
    // Set our cards to our div's inner HTML
    app.innerHTML = domString
}

// Invoke our function and send in our full pie array
// This will put our cards on the page on load
renderToDom(pies)

// Now let's make our vegan button work!
// Select our HTML button
const veganButton = document.querySelector("#vegan")

// Create our function to filter out our vegan pies
const filter = () => {
    // Create an empty array to hold our vegan pie objects
    // Just like we created our empty string to hold our cards!
    let veganPieArray = []

    // Loop over that pie arrray
    for(pie of pies){
        // Check to see if the pie is vegan
        if(pie.vegan === true){
            // If it is push it into our pie array
            veganPieArray.push(pie)
        }
    }

    // Now we can use our handy dandy function to render our new vegan pie aray to our page!
    renderToDom(veganPieArray)
}

// Add an event listener to our button
// This will listen for us to click our button
// On click it will invoke our filter function
veganButton.addEventListener('click', filter)


const form = document.querySelector('form')

const createPie = (event) =>{
    event.preventDefault()

    const newPieObj ={
        id: pies.length + 1,
        name: document.querySelector("#pieName").value,
        filling: document.querySelector("#pieFilling").value,
        vegan: document.querySelector("#isVegan").checked,
        bakeTemp: document.querySelector("#pieTemp").value,
    }

    pies.push(newPieObj)
    renderToDom(pies)
    form.reset()
}

form.addEventListener('submit', createPie)

