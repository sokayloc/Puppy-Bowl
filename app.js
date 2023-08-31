
// variable for single puppy and puppy list when needed
const singlePlayerDiv = document.getElementById("singlePuppy")
const playerListDiv = document.getElementById("pupbox");

//data const to hold data from api
const data =  {
    singlePlayer: null,
    allPlayers: [] 
    
}

// function to get all puppy info from api
const getPuppies = async () => {
   const fetchPuppy = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players'
    );
    const puppyData = await fetchPuppy.json();
    console.log(puppyData);
    data.allPlayers = puppyData.results

}






async function render() {
    await getPuppies()
    
}
//



