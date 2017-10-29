import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
exports : [RecipesComponent],
  declarations: [RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent]
})
export class RecipesModule { }
