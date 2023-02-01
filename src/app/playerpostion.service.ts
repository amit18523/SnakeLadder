import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlayerpostionService {
  public positonBehaviourA = new BehaviorSubject<number>(0);
  public postionBehaviourB = new BehaviorSubject<number>(0);
  constructor() { }
  setPostionA(pos : number){
    this.positonBehaviourA.next(pos);
  }
  setPostionB(pos : number){
    this.postionBehaviourB.next(pos);
  }
}
