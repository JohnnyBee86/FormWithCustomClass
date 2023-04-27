class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// Test Code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    console.log("addVideoGame was called");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

/**
 * Gets all game data from the form and returns it in a
 * VideoGame object
 * @returns VideoGame object
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();

    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;
    // or single line > game.title = (<HTMLInputElement>getById("title")).value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value); // convert string to number

    let rating = <HTMLSelectElement>getById("rating");
    game.rating = rating.value;

    let digitalOnly = <HTMLInputElement>getById("online"); // boolean value
    game.isDigitalOnly = digitalOnly.checked; // checked is true, unchecked false

    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void{
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "You can get a physical copy.";
    if(myGame.isDigitalOnly){
        gameMediumDisplay = "It is digital only.";
    }
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}.  It costs $${myGame.price.toFixed(2)}.  ${gameMediumDisplay}`

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> of game info
    displayDiv.appendChild(gameInfo);
}

// ADD VALIDATION CODE
function isAllDataValid(){
    return true;
}

function getById(id:string){
    return document.getElementById(id);
}