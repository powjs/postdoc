import { parse } from "@babel/parser";
import postdoc from '..';
describe('postdoc', () => {
  it('should with method postdoc', () => {
    postdoc.should.to.be.a('function');
  });
});
