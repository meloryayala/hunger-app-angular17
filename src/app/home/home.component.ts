import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {NgOptimizedImage} from "@angular/common";
import {Food} from "../share/models/food";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

}
