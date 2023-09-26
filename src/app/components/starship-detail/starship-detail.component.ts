import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starship: any;
  imgUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private StarwarsService: StarwarsService,
  ) { }

  ngOnInit(): void {
    this.getStarshipDetails();
  }

  getStarshipDetails(){
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.StarwarsService.getStarshipDetails(`https://swapi.dev/api/starships/${id}/`).subscribe(data => {
        this.starship = data;
        this.imgUrl = this.StarwarsService.getStarshipImageUrl(id);
      });
    }
  }

  handleImageError() {
    this.imgUrl = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  }
}
