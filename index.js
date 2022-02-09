const DOM = {
    searchButton: null,
    fetchButton: null,
    content: null,
    tableBody: null,
    tdPopulation: null,
    tdName: null,
    searchInput: null,
}

const ALLCOUNTRIES_API = `https://restcountries.com/v3.1/all`
const COUNTRYNAMES_API = `https://restcountries.com/v3.1/name`

function init() {
    DOM.searchButton = document.querySelector("#searchButton")
    DOM.fetchButton = document.querySelector("#fetchButton")
    DOM.content = document.querySelector("#content")
    DOM.tableBody = document.querySelector("#tableBody")
    DOM.tdPopulation = document.querySelector("#tdPopulation")
    DOM.tdName = document.querySelector("#tdName")
    DOM.searchInput = document.querySelector("#searchInput")
    DOM.fetchButton.addEventListener("click", getAllData)
    DOM.searchButton.addEventListener("click", getCountryByName)
}

init()


function getAllData() {
    fetch(ALLCOUNTRIES_API)
        .then(response => response.json())
        .then(data => drawTable(data));
}

function drawTable(data) {
    draw(data)

    for (let index = 0; index < data.length; index++) {
        const cn = data[index];

        const tdname = document.createElement("td")
        const tdpop = document.createElement("td")

        tdname.innerHTML = cn.name.common
        tdpop.innerHTML = cn.population

        const tr = document.createElement("tr")

        tr.append(tdname, tdpop)

        document.querySelector("#tableBody").append(tr)
    }
}

function draw(data) {
    let c = 0
    let av = 0
    for (let index = 0; index < data.length; index++) {
        const cn = data[index];
        c = c + cn.population || 0
        av = c / 250
    }
    document.querySelector("#total").innerHTML = c
    document.querySelector("#avarage").innerHTML = av
}


function getCountryByName() {
    const searchValue = searchInput.value
    fetch(`COUNTRYNAMES_API/${searchValue}`)
        .then(response => response.json())
        .then(data => drawTableByName(data));
}

function drawTableByName(data) {
    draw(data)

    const tdname = document.createElement("td")
    const tdpop = document.createElement("td")

    tdname.innerHTML = cn.name.common
    tdpop.innerHTML = cn.population

    const tr = document.createElement("tr")

    tr.append(tdname, tdpop)

    document.querySelector("#tableBody").append(tr)
}
