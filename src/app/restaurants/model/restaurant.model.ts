export class Day {
  opens: string;
  closes: string;

  constructor(obj?: any) {
    this.opens = (obj && obj.opens) || '';
    this.closes = (obj && obj.closes) || '';
  }
}

export class Restaurant{
    name: string;
    cuisine: string;
    _id: number;
    description: string;
    location: string;
    price: number;
    day: Day[];
    rating: number;

    constructor(obj?: any){
         this.name = obj && obj.name || '';
         this.cuisine  = obj && obj.cuisine || '';
         this._id = obj && obj._id || null;
         this.description  = obj && obj.description || '';
         this.location = obj && obj.location || '';
         this.price  = obj && obj.price || null;
         this.day = obj && obj.days || [];
         this.rating = obj && obj.rating || null;
    }
}

export class RestaurantList{
    count: number;
    results: Restaurant[];

    constructor(obj?:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map (x => new Restaurant(x));
    }
}

