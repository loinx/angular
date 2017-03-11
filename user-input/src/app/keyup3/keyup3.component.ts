import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup3',
  templateUrl: './keyup3.component.html',
  styleUrls: ['./keyup3.component.css']
})
export class Keyup3Component implements OnInit {
  value = '';

  constructor() { }

  onEnter(value: string) {
    this.value = value;
  }

  ngOnInit() {
  }

}
