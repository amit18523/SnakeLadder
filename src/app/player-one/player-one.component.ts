import { Component , EventEmitter, Input} from '@angular/core';
import { MainLogicService } from '../main-logic.service';
import { PlayerpostionService } from '../playerpostion.service';
@Component({
  selector: 'app-player-one',
  templateUrl: './player-one.component.html',
  styleUrls: ['./player-one.component.css']
})
export class PlayerOneComponent {
  // @Output() roomSelected = new EventEmitter<string>();
   
    @Input() toogle !: boolean;
    num !: number;
    numberHere !: number;
    playerOneToogle :boolean = false;
    posA : number = 0;
    
    constructor(private obj : MainLogicService, private obj1 : PlayerpostionService){
    }
    ngOnInit(){
        this.obj.message.subscribe(d=>{
          this.playerOneToogle = !d
        })
    }
    playerOne(){
      
       this.num = Math.random(); // 2
       this.numberHere = Math.floor((this.num * 6) + 1);
       this.obj.setToogle(this.playerOneToogle);
       this.obj1.setPostionA(this.numberHere);
       console.log(this.numberHere)
       console.log(this.toogle);
    }
}
