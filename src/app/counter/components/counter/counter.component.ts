import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      counter: {{counter}}
    </h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }

  public title:string = 'Hola yo';
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }

  reset():void{
    this.counter = 10
  }

}
