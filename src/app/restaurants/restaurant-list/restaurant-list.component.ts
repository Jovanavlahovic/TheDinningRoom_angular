import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Restaurant, RestaurantList } from '../model/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
@Input() restaurantList: RestaurantList;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


   open(restaurant: Restaurant):void{
    let modal = this.modalService.open(ModalComponent);
    modal.componentInstance.restaurant = restaurant;
  }

}
