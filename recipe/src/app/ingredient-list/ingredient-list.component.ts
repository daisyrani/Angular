import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Subscription } from 'rxjs/Subscription';
import { IngredientModel } from './ingredient.model';
import { IngredientListServices } from './ingredient.service';



@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
 ingredients: IngredientModel[]= [];
 //private subscription: Subscription;
 
  constructor(private ingredientService: IngredientListServices) {}

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredient();
    this.ingredientService.ingChanged.subscribe(
      (ing:IngredientModel[]) =>{
        this.ingredients = ing;
      }
    );
  }
 

  onSubmit(form:NgForm){
    const value = form.value;
    const ingModel = new IngredientModel(value.name, value.amount);
    
  }

  onDelete(){
    //this.ingModel[] = [new IngredientModel('banana', 10)];
  }

  onReset(){}
}
