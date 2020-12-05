import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/restaurants/model/restaurant.model';
import { RService } from 'src/app/restaurants/service/r.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
restaurants: Restaurant[];
cuisines: string[];

  constructor(private service: RService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants():void{
    this.service.getRestaurants().subscribe(x => {
      this.restaurants = x.results;
      this.getCuisines();
    })
  }

  getCuisines():void{
    this.cuisines = [];
    for(var i = 0; i < this.restaurants.length; i++){
      let cuisine = this.restaurants[i].cuisine;
      if(this.cuisines.indexOf(cuisine) == -1){
        this.cuisines.push(cuisine);
      }
    }
  }

}
