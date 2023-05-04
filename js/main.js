var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = getById("add");
    addBtn.onclick = addVideoGame;
    var clearAdds = getById("clear-adds");
    clearAdds.onclick = clearAddedGames;
};
function addVideoGame() {
    console.log("addVideoGame was called");
    clearErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getInputById("title");
    game.title = titleInput.value;
    var priceInput = getInputById("price");
    game.price = parseFloat(priceInput.value);
    var rating = getInputById("rating");
    game.rating = rating.value;
    var digitalOnly = getInputById("online");
    game.isDigitalOnly = digitalOnly.checked;
    console.log(game);
    return game;
}
function clearErrors() {
    console.log("clearError was called");
    var errorDiv = getById("error");
    while (errorDiv.firstChild) {
        errorDiv.removeChild(errorDiv.lastChild);
    }
}
function clearAddedGames() {
    var displayDiv = getById("display");
    while (displayDiv.firstChild) {
        displayDiv.removeChild(displayDiv.lastChild);
    }
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var gameMediumDisplay = "You can get a physical copy.";
    if (myGame.isDigitalOnly) {
        gameMediumDisplay = "It is digital only.";
    }
    gameInfo.innerText = "".concat(myGame.title, " has a rating of ").concat(myGame.rating, ".  It costs $").concat(myGame.price.toFixed(2), ".  ").concat(gameMediumDisplay);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function displayError(errorMessage) {
    var errorDiv = getById("error");
    var errorInfo = document.createElement("h3");
    errorInfo.innerText = errorMessage;
    errorDiv.appendChild(errorInfo);
}
function isAllDataValid() {
    var isDataValid = true;
    if (getInputById("title").value == "") {
        isDataValid = false;
        displayError("Please enter a title.");
    }
    if (!parseFloat((getInputById("price")).value)) {
        isDataValid = false;
        displayError("Please enter a price as a number.");
    }
    if (getInputById("rating").value == "Please choose a rating") {
        isDataValid = false;
        displayError("Please select the game's rating");
    }
    return isDataValid;
}
function getById(id) {
    return document.getElementById(id);
}
function getInputById(id) {
    return document.getElementById(id);
}
