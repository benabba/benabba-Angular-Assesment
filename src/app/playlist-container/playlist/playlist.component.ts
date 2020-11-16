import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PLAYLISTS } from 'src/app/mockData';
import { Playlist } from 'src/app/models/Playlist';
import { Slide } from 'src/app/models/Slide';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input()
  playlistId$!: Observable<number>;
  
  slidesToDisplay$!: Observable<Slide[]>;
  
  constructor() {}

  ngOnInit(): void {

    this.slidesToDisplay$ = this.playlistId$.pipe(map(id => PLAYLISTS[id].slides));
  }
}
