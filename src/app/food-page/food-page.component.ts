import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Food} from "../share/models/food";
import {CurrencyPipe} from "@angular/common";
import {CartService} from "../services/cart/cart.service";
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

  constructor(private foodService: FoodService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( (paramMap) => {
      this.foodId = paramMap.get('id')!;
      this.food = this.foodService.getFoodById(this.foodId);
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food!);
    this.router.navigateByUrl('/cart-page');
  }
}
