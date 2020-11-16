import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/Slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit{
  @Input()
  slide!: Slide;

  @Input()
  number!: number;

  totaldurationMinutes!: number;
  totaldurationSeconds!: number;
  constructor() { }

  ngOnInit(): void {

    this.totaldurationMinutes! = Math.trunc(this.slide.durationInSeconds/60);
    this.totaldurationSeconds! = this.slide.durationInSeconds%60;
  }

}