import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {HeroComponent} from './hero.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Hero Component (Shallow Tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(() => {
    // utility to test component and template together
    // and create module for testing one unit at a time
    TestBed.configureTestingModule({
      // add component that we are testing
      declarations: [HeroComponent],
      // work around for Template parse errors:
      // Can't bind to 'routerLink' since it isn't a known property of 'a'
      // ignore unknown attribute or element in template html
      schemas: [NO_ERRORS_SCHEMA]
    });

    // create component fixture - component wrapper
    fixture = TestBed.createComponent(HeroComponent);
  });

  // handle Error:cannot configure the test module when the test module has already been instantiated.
  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('has a passing canary test', () => {
    true.should.be.true(' automated test infrastructure failing');
  });

  it('should have the correct Hero', () => {
    fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 55};
    (fixture.componentInstance.hero.name).should.equal('SuperDude');
  });

  it('should render the hero name in an anchor tag', function () {
    // exterior component sets the property replicated by manually setting it
    fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 55};
    // execute change detection and update bindings
    fixture.detectChanges();
    // get handle of the dom element by anchor tag then take inner text ignoring html
    const compiled: HTMLElement = fixture.nativeElement;
    (compiled.querySelector('a').textContent).should.containEql('SuperDude');
  });
});
