import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() tytul:string;
  plusy= 3;
  minusy = 1;
  onDodajPlusClick(){
    this.plusy++;
  }

  onDodajMinusClick(){
    this.minusy++;
  }
  constructor() { }

  ngOnInit() {
  }

}
