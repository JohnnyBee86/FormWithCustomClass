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

}

// ADD VALIDATION CODE
function isAllDataValid(){
    return true;
}

function getById(id:string){
    return document.getElementById(id);
}