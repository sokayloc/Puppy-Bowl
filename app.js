

console.log('hello world')
async function pupFetch () {
    const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players'
    );
    const result = await response.json();
    console.log(result);
}   


pupFetch();




