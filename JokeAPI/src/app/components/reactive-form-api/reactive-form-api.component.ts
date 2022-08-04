import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-reactive-form-api',
  templateUrl: './reactive-form-api.component.html',
  styleUrls: ['./reactive-form-api.component.css'],
})
export class ReactiveFormAPIComponent implements OnInit {
  disabled: boolean = false;
  arrayOfData: any = [];
  error: string = '';
  url!: any;
  visible: boolean = false;

  update(value: any) {
    // this.reactiveForm.controls.cathegories.setValue(value.value);
    console.log(value.value);
    this.reactiveForm.controls['cathegories'].setValue(value.value);
    this.disabled = !this.disabled;
    console.log(this.reactiveForm.controls.cathegories.value);
  }

  favorite(data: any) {
    this.jokeService.favOneJoke(data);
    console.log(this.jokeService.arrayOfFavs);
    console.log(data);
  }

  reactiveForm = new FormGroup({
    amount: new FormControl(''),
    typeSingle: new FormControl(),
    typeTwopart: new FormControl(),
    cathegories: new FormControl(),
    //Cathegories
    programming: new FormControl(),
    misc: new FormControl(),
    dark: new FormControl(),
    pun: new FormControl(),
    spooky: new FormControl(),
    christmas: new FormControl(),
    //Flags
    nsfw: new FormControl(),
    religious: new FormControl(),
    political: new FormControl(),
    racist: new FormControl(),
    sexist: new FormControl(),
    explicit: new FormControl(),
  });
  disable: any = this.reactiveForm.controls.cathegories.value;
  getJokes() {
    // console.log(this.reactiveForm.value.programming);
    // console.log(this.reactiveForm.value.nsfw);
    const amount = this.reactiveForm.value.amount;
    const single = this.reactiveForm.value.typeSingle;
    const twopart = this.reactiveForm.value.typeTwopart;
    const cathegories = this.reactiveForm.value.cathegories;
    /*Cathegories*/
    const programming = this.reactiveForm.value.programming;
    const misc = this.reactiveForm.value.misc;
    const dark = this.reactiveForm.value.dark;
    const pun = this.reactiveForm.value.pun;
    const spooky = this.reactiveForm.value.spooky;
    const christmas = this.reactiveForm.value.christmas;
    /*Flags*/
    const nsfw = this.reactiveForm.value.nsfw;
    const religious = this.reactiveForm.value.religious;
    const political = this.reactiveForm.value.political;
    const racist = this.reactiveForm.value.racist;
    const sexist = this.reactiveForm.value.sexist;
    const explicit = this.reactiveForm.value.explicit;
    console.log(nsfw, religious, political, racist, sexist, explicit);

    this.jokeService
      .getJokesForReactiveForms(
        amount,
        single,
        twopart,
        cathegories,
        programming,
        misc,
        dark,
        pun,
        spooky,
        christmas,
        nsfw,
        religious,
        political,
        racist,
        sexist,
        explicit
      )

      // .pipe(
      //   map((item: any) => {
      //     if (this.reactiveForm.controls.typeSingle.value)
      //       return item.jokes.filter((el: any) => el.type === 'single');
      //     if (this.reactiveForm.controls.typeTwopart.value)
      //       return item.jokes.filter((el: any) => el.type === 'twopart');
      //     if (
      //       this.reactiveForm.controls.typeSingle.value &&
      //       this.reactiveForm.controls.typeTwopart.value
      //     )
      //       return item;
      //   })
      // )
      .subscribe({
        next: (item: any) => {
          this.arrayOfData = item.jokes;
          console.log(this.arrayOfData);
        },
        error: (err) => (this.error = err),
      });
    this.url = this.jokeService.url;
    this.visible = !this.visible;
    console.log(this.jokeService.url);
  }
  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {}
}
