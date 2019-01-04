import {StrengthPipe} from './strength.pipe';
describe('StrengthPipe', () => {
  it('gives "weak" for n < 10', () => {
    (new StrengthPipe()).transform(-10).should.equal('-10 (weak)');
  });
  it('gives "strong" for 10 <= n <= 20' , () => {
    (new StrengthPipe()).transform(18).should.equal('18 (strong)');
  });
  it('gives "unbelievable" for n >= 20' , () => {
    (new StrengthPipe()).transform(28 ).should.equal('28 (unbelievable)');
  });
});
