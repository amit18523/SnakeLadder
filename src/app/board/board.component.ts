import { Component, OnInit} from '@angular/core';
import { MyData } from './my-data';
import { PlayerpostionService } from '../playerpostion.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  uiBoard : MyData[] = [];
  currPosA : number = 0;
  currPosB : number = 0;
  // boardNo : number;
  // postionA : boolean;
  // postionB : boolean;
  // snakeHead : boolean;
  // snakeTail : boolean;
  constructor(private obj : PlayerpostionService){
    
  }

  ngOnInit(): void { 
    for(let i = 0; i < 100; i++){
   
      if(i === 21 || i === 33 || i === 47 || i === 96 || i === 98 || i === 73 || i === 55){
        this.uiBoard.push(new MyData( i + 1,false, false, true, false));
      } else if(i === 9 || i === 17 || i === 6 || i === 32 || i === 40 || i === 41 || i == 17) {
        this.uiBoard.push(new MyData( i + 1,false, false, false, true));
      } else {
        this.uiBoard.push(new MyData( i + 1,false, false, false, false));
      }    
    }
      this.uiBoard[this.currPosA].postionA = true;
      this.uiBoard[this.currPosB].postionB = true;

      this.obj.positonBehaviourA.subscribe(d=>{
        this.uiBoard[this.currPosA].postionA = false;
        
        this.currPosA += d;
        if(this.uiBoard[this.currPosA].snakeHead === true){
          this.currPosA = Math.max(0, this.currPosA - 10);
        }
        this.uiBoard[this.currPosA].postionA = true;
        console.log("currposA" + this.currPosA);
      })

      this.obj.postionBehaviourB.subscribe(d=>{
        this.uiBoard[this.currPosB].postionB = false;
        this.currPosB += d;
        if(this.uiBoard[this.currPosB].snakeHead === true){
          this.currPosB = Math.max(0, this.currPosB - 10);
        }
        this.uiBoard[this.currPosB].postionB = true;
        console.log("currPosB" + this.currPosB);
      })
  }

  fun():void{
    for(let i = 0; i < 100; i++){
      console.log(this.uiBoard[i]);
    }
  }
}
