import { parse } from "@babel/parser";
import Postdoc from '..';
describe('Postdoc', () => {
  it('should with method postdoc', () => {
    expect(Postdoc).to.be.an('function');
  });
});
