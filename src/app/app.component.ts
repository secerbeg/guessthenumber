import { Component } from '@angular/core';


@Component({
  selector: 'app-root'
  ,
  template: `
  <div class="container">
    <h2>Guess the Number !</h2>
    <div class="card bg-light mb-3">
    <div class="card-body">
          <p class="card-text">Guess the computer generated ranmber between 1 and 500.</p>
        </div>
    </div>
    <div>
      <label>Your Guess: </label>
      <input type="number" min="1" [value]="guess" (input)="guess = $event.target.value" required/>

    </div>

    <p class="text-info">No of guesses :
      <span class="badge">{{noOfTries}}</span>
    </p>
    <br/>
    <br/>
    <div>
      <button (click)="verifyGuess()" class="btn btn-primary btn-sm">Verify</button> &nbsp;&nbsp;
      <button (click)="initializeGame()" class="btn btn-warning btn-sm">Restart</button>
    </div>
    <div *ngIf="isInputPopulated === true" >

      <p *ngIf="deviation<0 " class="alert alert-warning">Your guess is higher.</p>
      <p *ngIf="deviation>0" class="alert alert-warning">Your guess is lower.</p>
      <p *ngIf="deviation===0" class="alert alert-success">Yes! That's it.</p>
    </div>

    <div *ngIf="isInputPopulated === false" >
      <p class="alert alert-warning">Valid number is required.</p>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'Guess the Number';
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;
  isInputPopulated: boolean;

  constructor() {
    this.initializeGame();
  }
  initializeGame() {
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 500) + 1);
    this.guess = null;
    this.deviation = null;
    this.isInputPopulated = null;
  }
   verifyGuess() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
    this.validateInputNumber();
  }

  private validateInputNumber() {
    this.isInputPopulated = false;
    if (this.guess != null) {
      this.isInputPopulated = true;
    }
  }
}
