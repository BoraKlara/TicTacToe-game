import Game from "./game.js";
import gameView from "./gameView.js";

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);

console.log(game.board);
console.log("my turn is", game.turn);

game.makeMove(3);
console.log(game.board);
game.makeMove(8);
console.log(game.board);

let titles = document.querySelectorAll(".board-title");
console.log(titles);
titles.forEach((title) => {
    title.addEventListener("click", () => {
        onTitleClick(title.dataset.index);
        console.log("Title Clicked");
        
    })
})
// Its an IMPORT SECTION

function onTitleClick(i){
    //do something
    game.makeMove(i);
    //make a move
    //change turn
    gameView.updateBoard(game);
    // update board
    game.nextTurn();
}