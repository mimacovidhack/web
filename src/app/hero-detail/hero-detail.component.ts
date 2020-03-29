import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => console.log('Go back'));
  }
}
