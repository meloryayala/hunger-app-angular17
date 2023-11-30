import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      'assets/images/food/eggs.jpg',
      'assets/images/food/cake.jpg',
      'assets/images/food/bacon.jpg',
      'assets/images/food/croissant.jpg',
      'assets/images/food/pancakes.jpg',
      'assets/images/food/yogurt.jpg',
    ]
  }
}
