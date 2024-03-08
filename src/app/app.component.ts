import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerComponent } from './components/timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Timer';
}
