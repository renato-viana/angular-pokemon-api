import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemonService';

const limit = 30;

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  offSet: number = 0;
  

  constructor(
    private pokemonService: PokemonService,
    
  ) { }

  ngOnInit(): void {

    this.pokemonService
      .getPokemon(this.offSet, limit).then(pokemons => this.pokemons = pokemons);
  }
}
