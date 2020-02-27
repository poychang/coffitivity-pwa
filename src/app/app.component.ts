import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  audio: HTMLAudioElement;
  currentAudio: string;
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
    this.currentAudio = '';
  }

  playAudio(audioName: string) {
    this.toggleAudioStatus(audioName);
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

  toggleAudioStatus(audioName: string) {
    this.playlist.filter(p => p.audioName !== audioName).map(p => (p.status = false));
    let toggle = this.playlist.find(p => p.audioName === audioName);
    toggle.status = !toggle.status;
  }
}
