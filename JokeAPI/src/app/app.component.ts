import { Component } from '@angular/core';
import { JokeService } from './services/joke.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jokeAPI';
  data: any;
  favoritesJokes: any = [];
  needToSeeFav: boolean = false;
  saveToSee: boolean = false;
  myJSONObservable$: any;
  callJokeService() {
    this.jokeService
      .getJokesFromServer()
      .pipe(
        map((joke: any) => {
          const newJoke = {
            id: joke.id,
            category: joke.category,
            error: joke.error,
            delivery: joke.delivery,
            setup: joke.setup,
            type: joke.type,
            lang: joke.lang,
            safe: joke.safe,
          };
          return newJoke;
        })
      )
      .subscribe((data) => {
        this.data = data;
        console.log(this.data);
      });
  }
  saveJoke(data: any) {
    const dataTime = new Date();
    console.log(dataTime);
    this.favoritesJokes.push({ ...data, key: dataTime });
    console.log(this.favoritesJokes);
  }
  showJoke() {
    this.needToSeeFav = !this.needToSeeFav;
  }

  constructor(private jokeService: JokeService) {}
  ngOnInit(): void {}
}
