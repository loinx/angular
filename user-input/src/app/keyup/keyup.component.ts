import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  values = '';
  constructor() { }

  /**
   * The method handles the event when user input
   * @param event
   */
  /*
  // Bind the event with any type. That simplifies the code at a cost
  // There is no type information that could reveal properties of the event object and prevent silly mistakes.
  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }
  */
  onKey(event: KeyboardEvent) {// specify the type for event
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  ngOnInit() {
  }

}
