import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  public time = new Date();
  public timer: any;
  public disabled = false;

  addNum(letter: 'H' | 'M' | 'S'): void | number {
    if (letter === 'H') {
      if (this.hours >= 99) this.hours = 0;
      this.hours += 1;
    }
    if (letter === 'M') {
      if (this.minutes >= 59) this.minutes = 0;
      this.minutes += 1;
    }
    if (letter === 'S') {
      if (this.seconds >= 59) this.seconds = 0;
      this.seconds += 1;
    }
  }

  removeNum(letter: 'H' | 'M' | 'S') {
    if (letter === 'H') {
      if (this.hours <= 0) return;
      this.hours -= 1;
    }
    if (letter === 'M') {
      if (this.minutes <= 0) return;
      this.minutes -= 1;
    }
    if (letter === 'S') {
      if (this.seconds <= 0) return;
      this.seconds -= 1;
    }
  }

  updateTimer() {
    this.time.setHours(this.hours);
    this.time.setMinutes(this.minutes);
    this.time.setSeconds(this.seconds);
    this.time.setMilliseconds(0);
    const date = this.time.getDate();
    this.time.setTime(date - 1000);

    this.hours = this.time.getHours();
    this.minutes = this.time.getMinutes();
    this.hours = this.time.getSeconds();

    if (
      this.time.getHours() === 0 &&
      this.time.getMinutes() === 0 &&
      this.time.getSeconds() === 0
    ) {
      clearInterval(this.timer);
    }
  }

  stopTime() {
    clearInterval(this.timer);
  }

  resetTime() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.disabled = false;
  }

  startTime() {
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
