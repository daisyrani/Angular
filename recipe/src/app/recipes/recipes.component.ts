import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
/*recipes:Recipe[] = [
  new Recipe('Diet Plan', 'Diet plan for Breakfast' )
];*/
recipeName: string ="";
displayRecipe: string="";
recipes = ["Pizza"];
//recipes: Recipe = new Recipe('Diet Plan', 'Diet plan for Breakfast' );

  constructor() { }


  ngOnInit(): void {
  }

  onNewRecipe(){
    this.recipes.push(this.recipeName);
    //this.displayRecipe = this.recipeName;
    
  }

  addNewRecipe(event: Event)
  {
   this.recipeName= (<HTMLInputElement>event.target).value;
    
  }

}
