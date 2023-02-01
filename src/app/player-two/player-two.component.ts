import { Component, OnInit } from '@angular/core';
import { MainLogicService } from '../main-logic.service';
import { PlayerpostionService } from '../playerpostion.service';

@Component({
  selector: 'app-player-two',
  templateUrl: './player-two.component.html',
  styleUrls: ['./player-two.component.css']
})
export class PlayerTwoComponent implements OnInit{
  num !: number;
  numberHere !: number;
  // obj !: MainLogicService;
  playertwoToogle :boolean = false;
  constructor(private obj : MainLogicService, private obj1 : PlayerpostionService){
  }
  ngOnInit(){
      this.obj.message.subscribe(d =>this.playertwoToogle = d)  
      // this.obj1.postionBehaviourB.subscribe(d =>this.)
  }
  playerTwo() {
    this.num = Math.random(); // 2
    this.numberHere = Math.floor((this.num * 6) + 1);
    this.obj1.setPostionB(this.numberHere);
    console.log(this.numberHere);
    this.obj.setToogle(!this.playertwoToogle);
    
  }
}
