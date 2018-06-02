import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import postdoc from '..';

//defineType('CommentLine');
const code = `
import 'path';
function square(n) {
  return n * n;
}
// comment`;

let key = -1;

function plugin(path) {
  console.log(path, path.node.type);
}

describe('postdoc', () => {
  it('should with method postdoc', () => {
    postdoc.should.to.be.a('function');

    const ast = parse(code,{sourceType: "module"});
    traverse(ast, {
      Program:(path)=>{
        path.traverse({
          enter: plugin
        })
      }
    })
  });
});
