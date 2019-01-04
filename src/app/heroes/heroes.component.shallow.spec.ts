import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {HeroService} from '../hero.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {constructor} from 'testdouble';
import {of} from 'rxjs';

const td = require('testdouble');
const {when} = td;

describe('Heroes component (shallow test)', () => {

  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService; // mock object using test double
  let component: HeroesComponent;
  let HEROES;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      // register mock service using long hand [ resolve staticinjectorerror ]
      providers: [{ provide: HeroService, useValue: mockHeroService}],
      // ignore Template parse error
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroesComponent);

    // require and create heroService
    mockHeroService = new (constructor(require('../hero.service').HeroService))();

    // arrange
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'WonderfulWoman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];
  });

  // handle Error:cannot configure the test module when the test module has already been instantiated.
  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('canary test for Heroes Component', () => {
    true.should.be.true(' automated test infrastructure failing');
  });

  it('should set heroes correctly from the service', () => {
    // testdouble
    when(mockHeroService.getHeroes()).thenReturn(of(HEROES));

    // setup system under test
    component = new HeroesComponent(mockHeroService);
  });
});
