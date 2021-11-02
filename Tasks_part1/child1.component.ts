import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
childData:string="Data for child component through View child"
  
  public selectedValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() eventClicked = new EventEmitter<string>();


  onClicked(event: string): void {
    this.eventClicked.emit(event);
  }
  who() {
    return this.childData;
  }
}

