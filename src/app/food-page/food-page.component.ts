import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {ActivatedRoute} from "@angular/router";
import {Food} from "../share/models/food";
import {CurrencyPipe} from "@angular/common";
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{

  food: Food | undefined;
  foodId!: string;

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (paramMap) => {
      this.foodId = paramMap.get('id')!;
      this.food = this.foodService.getFoodById(this.foodId);
    })
  }

  onAddToCart() {
    console.log("added to cart")

  }
}
