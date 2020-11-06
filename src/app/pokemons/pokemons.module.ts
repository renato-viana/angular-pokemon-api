import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './pokemon/card.component';
import { PokemonsComponent } from './pokemon-list/pokemons/pokemons.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './pokemon/pokemonService';



@NgModule({
  declarations: [CardComponent, PokemonListComponent, PokemonsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonListComponent
  ],
  providers: [PokemonService],
})
export class PokemonsModule { }
