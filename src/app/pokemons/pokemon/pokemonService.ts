import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';

const API = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;
const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
const baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

@Injectable({ providedIn: 'root' })
export class PokemonService {

    /**
     * Inject the HTTP service.
     */
    constructor(private http: HttpClient) { }

    /**
     * Method that fetches data from
     * the Pokémon API.
     */
    getPokemon(offset: number, limit: number) {
        return this.http.get(`${baseUrl}?offset=${offset}&limit=${limit}`)
            /**
             * The `get()` method returns
             * an Observable but we convert
             * it into a Promise.
             */
            .toPromise()
            .then(response => JSON.parse(JSON.stringify(response)).results)
            .then(items => items.map((item, idx) => {
                /**
                 * Massage the data a bit to
                 * create objects with the correct
                 * structure.
                 */
                const id: number = idx + offset + 1;

                return {
                    name: item.name,
                    sprite: `${baseSpriteUrl}${id}.png`,
                    id
                };
            }));
    }
}