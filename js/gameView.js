export default class GameView{

  constructor(){
      console.log("init game");
  }

  updateBoard(game){
      console.log();
      console.log(game.board);
      for(let i = 0; i < game.board.lenght; i++);
      const title= document.querySelector(".board-title[data-index=`${i}`]");
      title.textContent = game.board[i];
  }

}