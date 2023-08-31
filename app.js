
// variable for single puppy and puppy list when needed
const singlePlayerDiv = document.getElementById("singlePuppy");
const playerListDiv = document.getElementById("pupbox");

//data const to hold data from api
const data =  {
    singlePlayer: null,
    allPlayers: [] 
    
}

// calls other functions that identify single player
function identifyPlayer(){
    console.log("hashevent")
    hashEventGet();
    renderPuppyDetails();
}

window.addEventListener("hashchange", ()=> {
    console.log(window.location.hash)
    hashEventGet();
    renderPuppyDetails();
})


// gets the event from the hash
function hashEventGet(){
    const ID = decodeURI(window.location.hash.slice(1))
    data.singlePlayer = data.allPlayers.find((player) => {

        return player.id === ID
    })
    console.log("state ==> ", data)
}

// render the details of the player we are singling out
function renderPuppyDetails() {
    if (data.singlePlayer) {
        renderSinglePuppy()
    }
}

// function to get all puppy info from api
const getPuppies = async () => {
   const fetchPuppy = await fetch
   ("https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players");
    const puppyData = await fetchPuppy.json();
    data.allPlayers = puppyData.data.players
    console.log("state --> ", data)
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
    const singlePuppy = await fetch(data.singlePlayer.url);
    const playerData = await singlePuppy.json();
    console.log(playerData)
    singlePlayerDiv.innerHTML = `
        <div>
            <h3>${playerData.name}</h3>
            <img src="${playerData.imageUrl}">
        </div>
    `
}


// gets everything that needs to be rendered into one single async render function
async function render() {
    await getPuppies();
    renderAllPuppies();
    identifyPlayer();
}
//


render()

