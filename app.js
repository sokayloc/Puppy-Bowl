
// variable for single puppy and puppy list when needed
const singlePlayerDiv = document.getElementById("single");
const playerListDiv = document.getElementById("pupbox");

//data const to hold data from api & indentify player
const data = {
    singlePlayer: null,
    allPlayers: []
}

// listens for when the hash changes. if it does runs identifyPlayer function
window.addEventListener("hashchange", identifyPlayer);
// calls other functions that identify single player
function identifyPlayer() {
    console.log("hashevent")
    hashEventGet();
    renderPuppyDetails();
}



// gets the event from the hash
function hashEventGet() {
    // remove # from ID in url
    const ID = +window.location.hash.slice(1)
    data.singlePlayer = data.allPlayers.find((player) => {
        console.log(typeof(player.id))
        return player.id === ID
    })
    
    console.log("data ==> ", data.allPlayers)
    console.log(typeof(ID))
    console.log("singlepayer data ==> ", data.singlePlayer)
}
// if singleplayer is used. render the details of the player we are singling out
function renderPuppyDetails() {
    if (data.singlePlayer) {
        console.log("if state ran")
        renderSinglePuppy();
    }
}

// function to get all puppy info from api
const getPuppies = async () => {
    const fetchPuppy = await fetch
        (`https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players`);
    const puppyData = await fetchPuppy.json();
    data.allPlayers = puppyData.data.players
    console.log("data --> ", data)
}


// render all puppy info into html document boxes
const renderAllPuppies = () => {
    const puppies = data.allPlayers.map((player) => {
        return `
            <div id="pupbox2">
                <a href="#${player.id}">
                    <h2 align="center">${player.name}</h2> 
                </a>
                <p align="center"> ${player.breed} </p>
            </div>
        
        `
    })
    playerListDiv.innerHTML = puppies.join('')
}

const renderSinglePuppy = async () => {
    const singlePuppy = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/${data.singlePlayer.id}`)
    const playerData = await singlePuppy.json();
    console.log("player data==>", playerData.data.player)
    singlePlayerDiv.innerHTML = 
    `
        <div>
            <h3>${playerData.data.player.name}</h3>
            <p>${playerData.data.player.breed}</p>
            <img src="${playerData.data.player.imageUrl}">
        </div>
    `
    console
}


// gets everything that needs to be rendered into one single async render function
async function render() {
    await getPuppies();
    renderAllPuppies();
    identifyPlayer();
}

render()

