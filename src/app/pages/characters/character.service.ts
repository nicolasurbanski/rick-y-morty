import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CharactersService {
    async getCharacters() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        return data.results;
    }
}