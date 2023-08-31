
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
}

const renderAllPuppies = () => {
    const puppies = data.allPlayers.map((player) => {
        return `
        <div>
            <a href="#${player.id}"> </a>
        </div>
        
        `


    
    
        })

    
    playerListDiv.innerHTML = puppies.join('')
}



async function render() {
    await getPuppies()
    renderAllPuppies()

}
//

render()

