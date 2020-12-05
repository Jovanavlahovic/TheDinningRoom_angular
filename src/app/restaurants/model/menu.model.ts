export class Menu{
    _id: string;
    restaurants: string;
    items: string;

    constructor(obj?:any){
        this._id = obj && obj._id || '';
        this.restaurants = obj && obj.restaurants || '';
        this.items = obj && obj.items || '';
    }
}

export class Item{
    name:string;
    price: number;

    constructor(obj?:any){
        this.name = obj && obj.name || '';
        this.price = obj && obj.price || '';
    }
}