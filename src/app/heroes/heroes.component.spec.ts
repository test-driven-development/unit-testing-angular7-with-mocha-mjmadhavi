import {Hero} from '../hero';
import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs';
import {constructor} from 'testdouble';

const td = require('testdouble');
const {replace, when} = td;

describe('Heroes Component', () => {
  let HEROES: Hero[];
  let component: HeroesComponent;
  let service;
  beforeEach(() => {
    // arrange
    HEROES = [
      {id: 2, name: 'WonderfulWoman', strength: 24},
      {id: 2, name: 'WonderfulWoman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];
    // system under test requires a service to be passed to constructor
    // need a mock service since we do not what to make http call in our test
    // with jasmine we can use spy object for mocking here we will use testdouble
    // require and create heroService
    service = new (constructor(require('../hero.service').HeroService))();
  });

  it('has passing canary test', () => {
    true.should.be.true('automated test infrastructure not working');
  });

  it('collaborates with the heroes service to delete hero (observable)', () => {
    // testdouble
    when(service.deleteHero(HEROES[0])).thenReturn(of());
    // setup system under test
    component = new HeroesComponent(service);

    component.heroes = HEROES;
    component.heroes.length.should.equal(3);

    // act
    component.delete(HEROES[0]);

    // assert
    component.heroes.length.should.equal(2);
  });

  it('collaborates with the heroes service to delete hero (promise)', () => {
    // testdouble
    when(service.deleteHero(HEROES[0])).thenReturn(of());
    // setup system under test
    component = new HeroesComponent(service);

    component.heroes = HEROES;
    component.heroes.length.should.equal(3);

    // act
    return component.deleteHero(HEROES[0]).then((hero) => {
      // assert
      component.heroes.length.should.equal(2);
      component.heroes.should.not.containDeep(hero);
    });

  });

  it('collaborates with the heroes service to get heroes', () => {
    // testdouble
    when(service.getHeroes()).thenReturn(of());
    // setup system under test
    component = new HeroesComponent(service);

    component.heroes = HEROES;
    component.heroes.length.should.equal(3);
    // act
    return component.getHeroesList().then((heroes) => {

      // assert
      heroes.should.deepEqual(HEROES);
    });
  });

  it('collaborates with the heroes service to add hero', () => {
    // testdouble
    const hero = { name: 'Bond', strength: 77};
    const heroReturned = {id: 4, name: 'Bond', strength: 77};
    when(service.addHero(hero)).thenReturn(of(heroReturned));
    // setup system under test
    component = new HeroesComponent(service);

    component.heroes = HEROES;
    component.heroes.length.should.equal(3);
    // act
    return component.addHero('Bond', 77).then((heroFromService) => {

      // assert
      component.heroes.length.should.equal(4);
      component.heroes[3].should.deepEqual(heroFromService);
    });

  });
});
