import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  templateUrl: './little-tour.component.html',
  styleUrls: ['./little-tour.component.css']
})
export class LittleTourComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() { }
  addHero(newhero: string) {
    if (newhero) {
      this.heroes.push(newhero);
    }
  }
  ngOnInit() {
  }

}
