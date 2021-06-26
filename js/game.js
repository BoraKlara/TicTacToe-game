
export default class Game{

    constructor(){
        console.log("init game")
        this.turn = "X"
        this.board = new Array(9).fill(null)
        console.log(this.board);
    }

    nextTurn(){
        if(this.turn == "X"){
            this.turn = "O";
        }else{
            this.turn = "X";
        }
    }

    makeMove(i){
        this.board[i] = this.turn; // x or O

        if(this.board(i)){
            return;
        }
         this.board[i] = this.turn; // x or O
         let winningCombination = this.findWinningCombinatios();
         if(!winningCombination)
    }
   
    findWinningCombinatios(){
        const winningCombinations =[
            [0,1,2],
              [3,4,5],
                [6,7,8],
                  [0,,2],
                    [0,1,2],
                      [0,1,2],
        ]
  
        for(const combination of winningCombinations){
           const [a,b,c] = combination;

           if(this.board[a]) &&
           this.board[a] === this.board[b] && this.board[a]=== this.board[c];{
               return combination
           }
            return null;
          
        }

        endOfGame(){
            let winningCombination = this.finf
        }
    }


}


