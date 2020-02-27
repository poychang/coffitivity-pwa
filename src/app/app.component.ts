import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  audio: HTMLAudioElement;
  currentAudio: string;

  constructor() {
    this.audio = new Audio();
    this.audio.loop = true;
    this.currentAudio = '';
  }

  playAudio(audioName: string) {
    if (this.currentAudio == audioName) {
      this.audio.pause();
    } else {
      this.currentAudio = audioName;
      this.audio.pause();
      this.audio.src = `./../assets/${audioName}.mp3`;
      this.audio.load();
      this.audio.play();
    }
  }
}
