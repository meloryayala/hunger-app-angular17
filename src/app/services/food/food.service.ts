import {Injectable} from '@angular/core';
import {Food} from "../../share/models/food";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
  }

  getFoodById(id: string): Food | undefined {
    return this.getAll().find(food => food.id === +id);
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Leaves, Eggs & avocado',
        price: 12,
        tags: ['fit', 'vegetarian', 'healthy'],
        favorite: false,
        imageUrl: 'assets/images/food/eggs.jpg',
        description: "A healthy mix of avocado, fresh leave from the local producers and organic eggs",
      },
      {
        id: 2,
        name: 'Integral cake',
        price: 8,
        tags: ['sweet', 'integral'],
        favorite: false,
        imageUrl: 'assets/images/food/cake.jpg',
        description: "Handmade cake with integral flour, mix of proteic nuts and pieces of banana",
      },
      {
        id: 3,
        name: 'Morning bacons',
        price: 20,
        tags: ['meat', 'fat'],
        favorite: true,
        imageUrl: 'assets/images/food/bacon.jpg',
        description: "A typical English breakfast, with organic eggs and bacon, fresh made beans and digestive leaves",
      },
      {
        id: 4,
        name: 'Heaven croissant',
        price: 7,
        tags: ['pastry', 'sweet'],
        favorite: true,
        imageUrl: 'assets/images/food/croissant.jpg',
        description: "soft croissants combined with black coffee or cappuccino and side nutella",
      },
      {
        id: 5,
        name: 'Happy pancakes',
        price: 15,
        tags: ['dessert', 'sweet'],
        favorite: false,
        imageUrl: 'assets/images/food/pancakes.jpg',
        description: "Collection of pancakes made with love, berries and hot chocolate sauce",
      },
      {
        id: 6,
        name: 'Yogurt energy',
        price: 15,
        tags: ['dairy', 'fit', 'healthy'],
        favorite: false,
        imageUrl: 'assets/images/food/yogurt.jpg',
        description: "A powerful and energic combination of protein yogurt, nuts and oat flakes",
      }
    ]
  }
}
