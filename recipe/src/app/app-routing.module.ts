import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { IngredientListComponent } from "./ingredient-list/ingredient-list.component";

const routes: Routes = [
{path: '', redirectTo:'./home', pathMatch: 'full'},
{path: 'recipes', component: RecipesComponent},
{path: 'ingredient-list', component: IngredientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
