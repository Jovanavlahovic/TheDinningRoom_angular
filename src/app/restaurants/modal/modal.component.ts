import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../model/menu.model';
import { Restaurant } from '../model/restaurant.model';
import { RService } from '../service/r.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() restaurant: Restaurant;
daysOfWeek: string[];
menu: Menu;

  constructor(private service:RService) { }

  ngOnInit(): void {
    this.daysOfWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    this.getMenu();
  }


  getMenu():void{
    this.service.getMenu(this.restaurant._id).subscribe(x => {this.menu = x; console.log(this.menu);})
    
  }

}
