import {Postdoc} from './esm/types';
import './esm/to';

export default class postdoc extends Postdoc {
  // 使用 Postdoc 的入口类, 集合了所有的预制 is, re, to 插件.
  //
  // 如你所见, 因显示继承了 Postdoc 本段注释很简洁. 请注意空行和空注释行的差异.
  // class 缺省的 headers 是 '##', 提示或下降 headers 所产生逻辑冲突
  // 需要额外的插件解决, Postdoc 未预制这种插件.
  postdoc(ast, doc) {
    return null;
  }

  enter(path) {

  }
}
