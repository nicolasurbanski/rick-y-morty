import { Component, OnInit } from '@angular/core';
import { CharactersService } from './character.service';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters : any = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().then(data => {
    this.characters = data;
    console.log(this.characters);
    
    })
  } 
}
