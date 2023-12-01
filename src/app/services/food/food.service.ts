import {Injectable} from '@angular/core';
import {Food} from "../../share/models/food";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Leaves, Eggs & avocado',
        price: 12,
        tags: ['fit', 'vegetarian', 'healthy'],
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/images/food/eggs.jpg',
      },
      {
        id: 2,
        name: 'Integral cake',
        price: 8,
        tags: ['sweet', 'integral'],
        favorite: false,
        stars: 4.0,
        imageUrl: 'assets/images/food/cake.jpg',
      },
      {
        id: 3,
        name: 'Morning bacons',
        price: 20,
        tags: ['meat', 'fat'],
        favorite: true,
        stars: 5,
        imageUrl: 'assets/images/food/bacon.jpg',
      },
      {
        id: 4,
        name: 'Heaven croissant',
        price: 7,
        tags: ['pastry', 'sweet'],
        favorite: true,
        stars: 4.8,
        imageUrl: 'assets/images/food/croissant.jpg',
      },
      {
        id: 5,
        name: 'Happy pancakes',
        price: 15,
        tags: ['dessert', 'sweet'],
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/images/food/pancakes.jpg',
      },
      {
        id: 6,
        name: 'Yogurt energy',
        price: 15,
        tags: ['dairy', 'fit', 'healthy'],
        favorite: false,
        stars: 4.0,
        imageUrl: 'assets/images/food/yogurt.jpg',
      }
    ]
  }
}
