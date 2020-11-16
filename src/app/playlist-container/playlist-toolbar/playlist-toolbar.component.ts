import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PLAYLISTS } from 'src/app/mockData';

@Component({
  selector: 'app-playlist-toolbar',
  templateUrl: './playlist-toolbar.component.html',
  styleUrls: ['./playlist-toolbar.component.scss']
})
export class PlaylistToolbarComponent implements OnInit {
  @Input()
  playlistId$!: Observable<number>;
  
  playlistName$!: Observable<string>;
  totaldurationMinutes$!: Observable<number>;
  totaldurationSeconds$!: Observable<number>;
  constructor() { }

  ngOnInit(): void {
    this.playlistName$! = this.playlistId$.pipe(map(id => PLAYLISTS[id].name));
    let sum$ = this.playlistId$.pipe(map(id => PLAYLISTS[id].slides.map(slide => slide.durationInSeconds).reduce((a, b) => a + b, 0)));
    this.totaldurationMinutes$! = sum$.pipe(map(sum => Math.trunc(sum/60)));
    this.totaldurationSeconds$! = sum$.pipe(map(sum => sum%60));
  }
}