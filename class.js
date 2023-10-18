
const pies = [{
    id: 1,
    name: "Buttermilk Pie",
    crustType: "Best crust",
    filling: "buttermilk",
    slices: 20,
    numberOfEggs: 6,
    vegan: false,
    bakeTemp: 400,
},
{
    id: 2,
    name: "Chess Pie",
    crustType: "Bad crust",
    filling: "buttermilk",
    slices: 20,
    numberOfEggs: 6,
    vegan: true,
    bakeTemp: 400,
},
{
    id: 3,
    name: "Apple Pie",
    crustType: "Sugar crust",
    filling: "buttermilk",
    slices: 20,
    numberOfEggs: 6,
    vegan: false,
    bakeTemp: 400,
},
{
    id: 4,
    name: "Cranberry Pie",
    crustType: "craker crust",
    filling: "buttermilk",
    slices: 20,
    numberOfEggs: 6,
    vegan: true,
    bakeTemp: 400,
}]

const app = document.querySelector("#app")

let domString = ""

for (pie of pies){
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${pie.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${pie.filling}</h6>
    <p class="card-text">${pie.numberOfEggs}</p>
    </div>
    </div>`
}

app.innerHTML = domString