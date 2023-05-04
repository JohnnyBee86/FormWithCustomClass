class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}


window.onload = function():void{
    let addBtn = <HTMLElement>getById("add");
    addBtn.onclick = addVideoGame;
    let clearAdds = <HTMLElement>getById("clear-adds");
    clearAdds.onclick = clearAddedGames;
}

/**
 * if all data is valid it will "add the game"
 */
function addVideoGame():void{
    console.log("addVideoGame was called");
    
    clearErrors();
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

    let titleInput = getInputById("title");
    game.title = titleInput.value;
    // or single line > game.title = (<HTMLInputElement>getById("title")).value;

    let priceInput = getInputById("price");
    game.price = parseFloat(priceInput.value); // convert string to number

    let rating = getInputById("rating");
    game.rating = rating.value;

    let digitalOnly = getInputById("online"); // boolean value
    game.isDigitalOnly = digitalOnly.checked; // checked is true, unchecked false

    console.log(game);
    return game;
}

/**
 * Clears all error Messages
 */
function clearErrors():void{
    console.log("clearError was called");
    
    let errorDiv = getById("error");
    while(errorDiv.firstChild) {
        errorDiv.removeChild(errorDiv.lastChild);
    }
}

/**
 * Clears added games
 */
function clearAddedGames():void{
    let displayDiv = getById("display");
    while(displayDiv.firstChild) {
        displayDiv.removeChild(displayDiv.lastChild);
    }
}

/**
 * Displays the added game below the add button
 * @param myGame The game that was added
 */
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

/**
 * Displays error messages above the Title field
 * @param errorMessage Appropriate error message
 */
function displayError(errorMessage:string):void{
    let errorDiv = getById("error");

    // Create <p> with error message
    let errorInfo = document.createElement("h3");
    errorInfo.innerText = errorMessage;

    errorDiv.appendChild(errorInfo);
}

/**
 * Validates all data
 * @returns True if data is valid
 */
function isAllDataValid():boolean{
    let isDataValid = true;
    if(getInputById("title").value == "") {
        isDataValid = false;
        displayError("Please enter a title.");
    }
    if(!parseFloat((getInputById("price")).value)) {
        isDataValid = false;
        displayError("Please enter a price as a number.")
    }
    if(getInputById("rating").value == "Please choose a rating") {
        isDataValid = false;
        displayError("Please select the game's rating");
    }
    return isDataValid;
}

function getById(id:string):HTMLElement{
    return document.getElementById(id);
}

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}