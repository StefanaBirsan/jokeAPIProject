import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  /*Old project*/
  arrayOfFavs: any = [];
  asyncServiceProperty = this.http.get(
    'https://v2.jokeapi.dev/joke/Programming?type=twopart'
  );
  /*----------------------------------------------------*/

  value!: string;
  arrayOfPath: any = [];
  pathToResource!: string;
  flags: boolean = true;
  balckList: any = [];
  pathBlackList!: string;
  /*Cathegories*/
  programming!: string;
  misc!: string;
  dark!: string;
  pun!: string;
  spooky!: string;
  christmas!: string;
  /*Flags*/
  nsfw!: string;
  religious!: string;
  political!: string;
  racist!: string;
  sexist!: string;
  explicit!: string;
  url!: string;
  favOneJoke(data: any) {
    this.arrayOfFavs.push(data);
  }
  getJokesFromServer() {
    return this.http.get(
      'https://v2.jokeapi.dev/joke/Programming?type=twopart'
    );
  }
  getJokesForReactiveForms(
    amount: any,
    single: any,
    twopart: any,
    cathegories: any,
    programming: any,
    misc: any,
    dark: any,
    pun: any,
    spooky: any,
    christmas: any,
    nsfw: any,
    religious: any,
    political: any,
    racist: any,
    sexist: any,
    explicit: any
  ) {
    console.log(
      amount,
      single,
      twopart,
      cathegories,
      programming,
      programming,
      misc,
      dark,
      pun,
      spooky,
      christmas
    );
    console.log(nsfw, religious, political, racist, sexist, explicit);
    /*JOKE TYPE*/
    if (single === true) this.value = 'type=single&';
    if (twopart === true) this.value = 'type=twopart&';
    if (single === true && twopart === true) this.value = '';
    if (single === null && twopart === null) this.value = '';
    /*JOKE CATHEGORY*/
    if (cathegories === 'any') this.pathToResource = 'Any';
    if (cathegories === 'custom') {
      if (programming === true) {
        this.programming = 'Programming';
        this.arrayOfPath.push(this.programming);
      } else this.programming = '';
      if (misc === true) {
        this.misc = 'Miscellaneous';
        this.arrayOfPath.push(this.misc);
      } else this.misc = '';
      if (dark === true) {
        this.dark = 'Dark';
        this.arrayOfPath.push(this.dark);
      } else this.dark = '';
      if (pun === true) {
        this.pun = 'Pun';
        this.arrayOfPath.push(this.pun);
      } else this.pun = '';
      if (spooky === true) {
        this.spooky = 'Spooky';
        this.arrayOfPath.push(this.spooky);
      } else this.spooky = '';
      if (christmas === true) {
        this.christmas = 'Spooky';
        this.arrayOfPath.push(this.christmas);
      } else this.christmas = '';
      this.pathToResource = this.arrayOfPath.join(',');
    }
    /*JOKE FLAGS*/
    if (nsfw === true) {
      this.flags = true;
      this.nsfw = 'nsfw';
      this.balckList.push(this.nsfw);
    }
    if (religious === true) {
      this.flags = true;
      this.religious = 'religious';
      this.balckList.push(this.religious);
    }
    if (political === true) {
      this.flags = true;
      this.political = 'political';
      this.balckList.push(this.political);
    }
    if (racist === true) {
      this.flags = true;
      this.racist = 'racist';
      this.balckList.push(this.racist);
    }
    if (sexist === true) {
      this.flags = true;
      this.sexist = 'sexist';
      this.balckList.push(this.sexist);
    }
    if (explicit === true) {
      this.flags = true;
      this.explicit = 'explicit';
      this.balckList.push(this.explicit);
    }
    if (this.balckList.lenght > 1) {
      this.pathBlackList = `blacklistFlags=${this.balckList.join(',')}`;
      console.log(this.pathBlackList);
    } else this.pathBlackList = '';
    this.url = `https://v2.jokeapi.dev/joke/${this.pathToResource}?${this.pathBlackList}&${this.value}&amount=${amount}`;

    return this.http.get(this.url);
  }

  // return this.http.get(`https://v2.jokeapi.dev/joke/Any?amount=${amount}`);

  constructor(private http: HttpClient) {}
}
