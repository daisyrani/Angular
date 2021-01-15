

import { EventEmitter, Injectable } from '@angular/core';
import {IngredientModel} from './ingredient.model';

@Injectable()
export class IngredientListServices{
    ingChanged= new EventEmitter<IngredientModel[]>();
  private  ingredients: IngredientModel[] = [
        new IngredientModel('Apple', 7),
        new IngredientModel('Orange', 5)];
     
    //slice() returns the new copy of array not the original array
getIngredient(){
    return this.ingredients.slice();
}
addIngredient(ing: IngredientModel){
    this.ingredients.push(ing);
    //this.ingChanged.next(this.ingredients.slice());
  }

}
