import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.scss']
})
export class PlaylistContainerComponent implements OnInit {

  playlistId$!: Observable<any>;

  constructor(private route: ActivatedRoute, public router: Router) {
  }
  ngOnInit(): void {
    this.playlistId$ = this.route.paramMap.pipe(map((params: ParamMap) => parseInt(params.get('id') as string)));
  }
}
