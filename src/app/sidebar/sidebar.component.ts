import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PLAYLISTS } from '../mockData';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  playlists: { name: string, id: number }[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.playlists = PLAYLISTS.map((item, index) => { return {name: item.name, id: index}});
  }

  onSelect(playlist: { name: string, id: number }) {
    console.log(playlist);
    this.router.navigate(['/playlist', playlist.id]);  
  }
}