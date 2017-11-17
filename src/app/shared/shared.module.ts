import { Ingredient } from './ingredient.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective
  ],
  declarations: [
    DropdownDirective
  ]
})
export class SharedModule { }
