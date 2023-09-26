import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(private http: HttpClient) {}

  getStarships(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/?page=${page}`);
  }

  getStarshipDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

  getStarshipImageUrl(id: string): string{
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }
}
