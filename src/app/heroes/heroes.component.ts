import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {promise} from 'selenium-webdriver';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getHeroesList(): Promise<Hero[]> {
    return this.heroService.getHeroes().toPromise().then(() => {
      return this.heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    const strength = 11;
    if (!name) {
      return;
    }
    this.heroService.addHero({name, strength} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  addHero( name: string, strength?: number ): Promise<Hero> {
    name = name.trim();
    if (!name) {
      return;
    }
    if (!strength) {
      strength = 11;
    }
    return this.heroService.addHero({name, strength} as Hero)
      .toPromise().then((hero) => {
        this.heroes.push(hero);
        return hero;
    });
  }

  // returns observable
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // return promise
  deleteHero(hero: Hero): Promise<any> {
    return this.heroService.deleteHero(hero).toPromise().then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      return hero;
    });
  }

}
