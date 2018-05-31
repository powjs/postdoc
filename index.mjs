import is from './esm/is';
import to from './esm/to';
import {Postdoc} from './esm/interfaces';

export class postdoc extends Postdoc
// 使用 Postdoc 的入口类, 集合了所有的内置 is, to 实现.
//
// 如你所见, 因显示继承了 Postdoc 本段注释很简洁. 请注意空行和空注释行的差异.
// class 缺省的 headers 是 '##', 提示或下降 headers 所产生逻辑冲突
// 需要另外的 action 解决, Postdoc 未提供这种解决办法.
{
  postdoc(ast, doc)
  //
  {
    return null;
  }

  enter(path) {

  }
}

export default function({ types: t })
// re object({visitor:{postdoc=(path, state)=>{}}})
//
// 返回一个包装了 postdoc 实例的 babel visitor
//
// 如你所见, ECMAScript 解构语法
//
{
  const visitor = new postdoc();
  return {
    visitor: {
      postdoc(path, state) {
        visitor
      }
    }
  };
}