import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../pokemon/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnChanges {

  @Input() pokemons: Pokemon[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pokemons)
      this.rows = this.groupColumns(this.pokemons);
  }

  groupColumns(pokemons: Pokemon[]) {
    const newRows = [];

    for (let index = 0; index < pokemons.length; index += 6) {
      newRows.push(pokemons.slice(index, index + 6));
    }
    return newRows;
  }

}
