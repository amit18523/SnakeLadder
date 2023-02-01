import { NgModule, OnInit, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PlayerOneComponent } from './player-one/player-one.component';
import { PlayerTwoComponent } from './player-two/player-two.component';
import { FormsModule } from '@angular/forms';
import { MainLogicService } from './main-logic.service';
import { PlayerpostionService } from './playerpostion.service';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PlayerOneComponent,
    PlayerTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [MainLogicService, PlayerpostionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
