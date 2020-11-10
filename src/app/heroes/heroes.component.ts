import { Component, OnInit } from "@angular/core";
//importeren van de interface Hero
import { Hero } from "../hero";

import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  heroes: Hero[];

  //oude manier
  //selectedHero: Hero;
  //onSelect(hero: Hero): void {
  //this.selectedHero = hero;
  //this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  // oude manier
  //  getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();
  // }

  //herschreven
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnInit() {
    this.getHeroes();
  }
}
