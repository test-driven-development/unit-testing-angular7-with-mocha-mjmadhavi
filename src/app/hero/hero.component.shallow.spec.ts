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

  it('has a passing canary test',  () => {
    true.should.be.true(' automated test infrastructure failing');
  });

  it('should have the correct Hero');
});
