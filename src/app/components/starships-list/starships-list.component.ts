import { Component, OnInit } from '@angular/core';

import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships: any[] = [];
  currentPage: number = 1;

  constructor(private StarwarsService: StarwarsService) { }

  ngOnInit(): void {
    this.showStarships();
  }

  showStarships(): void {
    this.StarwarsService.getStarships(this.currentPage).subscribe(data => {
      this.starships = this.starships.concat(data.results);
    });
  }

  showMore():void{
    this.currentPage++;
    this.showStarships();
  }
}
