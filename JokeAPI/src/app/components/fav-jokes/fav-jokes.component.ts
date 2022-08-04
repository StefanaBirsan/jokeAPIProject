import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeService } from 'src/app/services/joke.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fav-jokes',
  templateUrl: './fav-jokes.component.html',
  styleUrls: ['./fav-jokes.component.css'],
})
export class FavJokesComponent implements OnInit {
  asyncData$!: Observable<any>;
  favJokes: any = this.jokeService.arrayOfFavs;

  callJoke() {
    this.asyncData$ = this.http.get(
      'https://v2.jokeapi.dev/joke/Programming?type=twopart'
    );
  }
  constructor(private jokeService: JokeService, private http: HttpClient) {}
  ngOnInit(): void {}
}
