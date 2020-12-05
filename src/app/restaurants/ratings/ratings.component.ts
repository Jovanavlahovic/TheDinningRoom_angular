import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
@Input() rating: number;
@Input() imageFull: string;
@Input() imageEmpty: string;
numbOfEmpty: any[];
numbOfFull: any[];

  constructor() { }

  ngOnInit(): void {
    this.setNumbOfImages();

  }

  setNumbOfImages():void{
    this.numbOfFull = new Array(this.rating);
    this.numbOfEmpty = new Array(5 - this.rating);
  }
}
