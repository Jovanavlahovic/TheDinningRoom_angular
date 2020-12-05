import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { RestaurantList } from './model/restaurant.model';
import { RService } from './service/r.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
restaurants: RestaurantList;

parameters = {
  page: 1,
  pageSize: 12,
  filter: {
    cuisine: '',
    priceFrom: '',
    priceTo: ''
  }
}

  constructor(private service: RService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe( x => {
      this.parameters.filter.cuisine = x['cuisine'] ? x['cuisine'] : ''
      this.getRestaurants()
  })
  }

  getRestaurants():void{
    this.service.getRestaurants(this.parameters).subscribe(x => {
      this.restaurants = x;
    })
  }

  changePage(page):void{
    this.parameters.page = page;
    this.getRestaurants();
  }

 

}
