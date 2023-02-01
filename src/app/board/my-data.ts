export class MyData {
    posNo : number;
    postionA : boolean;
    postionB : boolean;
    snakeHead : boolean;
    snakeTail : boolean;
    constructor(boardN : number, posA : boolean, posB : boolean , snakeH : boolean, snakeT : boolean){
        this.posNo = boardN;
        this.postionA = posA;
        this.postionB = posB;
        this.snakeHead = snakeH;
        this.snakeTail = snakeT;
    }
  
}
