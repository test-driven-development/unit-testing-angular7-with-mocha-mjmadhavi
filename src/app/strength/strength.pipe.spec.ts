import {StrengthPipe} from './strength.pipe';
describe('StrengthPipe', () => {
  it('gives "weak" for n < 10', () => {
    (new StrengthPipe()).transform(-10).should.equal('-10 (weak)');
  });
  it('gives "strong" for 10 <= n <= 20' );
  it('gives "unbelievable" for n >= 20' );
});
