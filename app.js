
// variable for single puppy and puppy list when needed
const singlePlayerDiv = document.getElementById("singlePuppy");
const playerListDiv = document.getElementById("pupbox");

//data const to hold data from api
const data =  {
    singlePlayer: null,
    allPlayers: [] 
    
}

// function to get all puppy info from api
const getPuppies = async () => {
   const fetchPuppy = await fetch
   ("https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players");
    const puppyData = await fetchPuppy.json();
    data.allPlayers = puppyData.data.players
    console.log(data.allPlayers)
    console.log(typeof(data.allPlayers))
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


// gets everything that needs to be rendered into one single async render function
async function render() {
    await getPuppies()
    renderAllPuppies()

}
//

render()

