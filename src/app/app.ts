import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-evolucare');
  score = signal(0);
  points:number = 0;
  count() {
    this.score.set(this.score() + 1);
  }
  increment() {
    this.points ++;
  }
}
