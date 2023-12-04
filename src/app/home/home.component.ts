import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import {Food} from "../share/models/food";
import {ActivatedRoute} from "@angular/router";
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  searchTerm: String | null = "";
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.searchTerm = paramMap.get('searchTerm');
      if (this.searchTerm) {
        // @ts-ignore
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
