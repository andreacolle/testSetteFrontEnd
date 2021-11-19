import { Component, OnInit } from '@angular/core';
import { Articoli } from '../models/articoli';
import { ArticoliDataService } from './articoli-data.service';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  listaArticoli: Articoli[] = [];

  constructor(private articoliService: ArticoliDataService) { }

  ngOnInit(): void {

    this.articoliService.getArticoli().subscribe(
      response => {
          console.log('test');
          this.listaArticoli = response;
          console.log(this.listaArticoli.length);

      },
      error => {
        console.log(error);
      }
    )
  }

}
