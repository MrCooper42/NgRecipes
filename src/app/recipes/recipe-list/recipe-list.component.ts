import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
new Recipe('A Test Recipe', 'This is a test recipe', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chi' +
    'cken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
