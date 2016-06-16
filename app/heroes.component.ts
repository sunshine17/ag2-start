import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';


import { Hero } from './hero';

import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
})

export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
      private heroService: HeroService,
      private router: Router
  ) { }

  onSelect(hero: Hero) { 
      this.selectedHero = hero; 
  }

  gotoDetail(){
      this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  getHeroes(){
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
      this.getHeroes();
  }

}


