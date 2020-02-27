import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  audio: HTMLAudioElement;
  playlist = [
    {
      title: 'Morning Murmur',
      desc: 'A gentle hum gets the day going',
      audioName: 'murmur',
      status: false
    },
    {
      title: 'Lunchtime Lounge',
      desc: 'Busting chatter of the lunchtime rush',
      audioName: 'lunch',
      status: false
    },
    {
      title: 'University Undertones',
      desc: 'The scholarly sounds of a campus cafe',
      audioName: 'univ',
      status: false
    }
  ];

  constructor() {
    this.audio = new Audio();
    this.audio.loop = true;
  }

  playAudio(audioName: string) {
    let currentAudio = this.playlist.find(p => p.audioName === audioName);
    if (currentAudio.status) {
      console.log(`pause current ${audioName} audio`);
      this.audio.pause();
      currentAudio.status = false;
    } else {
      console.log(`play ${audioName} audio`);
      this.audio.pause();
      this.audio.src = `./assets/audio/${audioName}.mp3`;
      this.audio.load();
      this.audio.play();
      currentAudio.status = true;
    }
  }
}
