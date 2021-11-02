import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  childData:string='';
  @ViewChild(Child1Component) child!: Child1Component;
  ngAfterViewInit() {
    this.childData = this.child.who();
  }
  title = 'demopro';
  public selectedValue: string='';

  childEventClicked(event: string) {
    this.selectedValue = event;
  }
}
