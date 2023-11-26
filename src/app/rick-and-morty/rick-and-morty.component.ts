// rick-and-morty.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
}

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {
  characters: Character[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    const apiUrl = 'https://rickandmortyapi.com/api/character';

    this.http.get<any>(apiUrl).subscribe((response) => {
      // Filtrar personajes con ID impar
      this.characters = response.results.filter((character: Character) => character.id % 2 !== 0);
    });
  }
}
