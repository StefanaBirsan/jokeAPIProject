import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponentComponent } from './components/initial-component/initial-component.component';
import { ReactiveFormAPIComponent } from './components/reactive-form-api/reactive-form-api.component';
import { FavJokesComponent } from './components/fav-jokes/fav-jokes.component';
const routes: Routes = [
  {
    path: '',
    component: InitialComponentComponent,
  },
  {
    path: 'InitialPage',
    component: InitialComponentComponent,
  },

  {
    path: 'ReactiveFormsAPI',
    component: ReactiveFormAPIComponent,
  },
  {
    path: 'FavoriteJokes',
    component: FavJokesComponent,
  },

  {
    path: 'ReactiveFormsAPI/FavoriteJokes',
    redirectTo: 'FavoriteJokes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
