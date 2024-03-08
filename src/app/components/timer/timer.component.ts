import { Component } from '@angular/core';
@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
})
export class TimerComponent {
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  public date = new Date();
  public timer: any;
  public disabled = false;

  addNum(letter: 'H' | 'M' | 'S'): void | number {
    if (letter === 'H') {
      if (this.hours >= 99) return;
      this.hours += 1;
    } else if (letter === 'M') {
      if (this.minutes >= 39) return;
      this.minutes += 1;
    } else {
      if (this.seconds >= 59) return;
      this.seconds += 1;
    }
    console.log(this.hours, this.minutes, this.seconds);
  }

  removeNum(letter: 'H' | 'M' | 'S') {
    if (letter === 'H') {
      if (this.hours <= 0) return;
      this.hours -= 1;
    } else if (letter === 'M') {
      if (this.minutes <= 0) return;
      this.minutes -= 1;
    } else {
      if (this.seconds <= 0) return;
      this.seconds -= 1;
    }
  }

  updateTimer() {
    this.date.setHours(this.hours);
    this.date.setMinutes(this.minutes);
    this.date.setSeconds(this.seconds);
    this.date.setMilliseconds(0);
    const time = this.date.getTime();
    this.date.setTime(time - 1000);

    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();

    if (
      this.date.getHours() === 0 &&
      this.date.getMinutes() === 0 &&
      this.date.getSeconds() === 0
    ) {
      clearInterval(this.timer);
    }
  }

  stopTime() {
    this.disabled = false;
    clearInterval(this.timer);
  }

  resetTime() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.stopTime();
  }

  startTime() {
    console.log(this.hours, this.minutes, this.seconds);
    if (this.hours > 0 || this.minutes > 0 || this.seconds > 0) {
      this.disabled = true;
      this.updateTimer();
      if (this.seconds > 0) {
        this.timer = setInterval(() => {
          this.updateTimer();
        }, 1000);
      }
    }
  }
}
