import {Hero} from '../hero';
import {HeroesComponent} from './heroes.component';
import {HeroService} from '../hero.service';
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
    // require and create heroService testdouble
    service = new(constructor(require('../hero.service').HeroService))();
  });

  it('has passing canary test', () => {
    true.should.be.true('automated test infrastructure not working');
  });

  it('collaborates with the heroes service to delete hero', () => {

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

  it('collaborates with the heroes service to get heroes');
  it('collaborates with the heroes service to add hero');
});
