import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import {DishService} from '../services/dish.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes =  this.dishService.getDishes();
  }
   onSelect(dish: Dish){
     this.selectedDish = dish;
   }

}




