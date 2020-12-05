import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Menu } from '../model/menu.model';
import { Restaurant, RestaurantList } from '../model/restaurant.model';

const baseUrl = 'http://localhost:3000/api/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RService {

  constructor(private http: HttpClient) { }

  getRestaurants(params?:any):Observable<RestaurantList>{
    let queryParams = {};

    if (params) {
      queryParams = { params: new HttpParams()
          .set('page', (params.page && params.page.toString()) || '1')
          .set(
            'pageSize',
            (params.pageSize && params.pageSize.toString()) || '12'
          )
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }
    return this.http.get(baseUrl, queryParams).pipe(map(x =>  new RestaurantList(x)))
  }

  getMenu(id:number):Observable<Menu>{
    return this.http.get(`${baseUrl}/${id}/menus`).pipe(map((x:any) => x.results[0] as Menu))
  }
}
