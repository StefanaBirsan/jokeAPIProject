import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavJokesComponent } from './components/fav-jokes/fav-jokes.component';

import { InitialComponentComponent } from './components/initial-component/initial-component.component';
import { ReactiveFormAPIComponent } from './components/reactive-form-api/reactive-form-api.component';

@NgModule({
  declarations: [
    AppComponent,
    FavJokesComponent,
    InitialComponentComponent,
    ReactiveFormAPIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
