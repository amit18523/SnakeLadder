import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainLogicService {
 
  constructor() {}
  public message = new BehaviorSubject<boolean>(true);
  setToogle (val : boolean){
      this.message.next(val);
  }
}
