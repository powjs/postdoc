// to license MIT License <https://github.com/powjs/postdoc/blob/master/LICENSE>

export class Postdoc
// is Postdoc # 是在注释中写文档和类型注解的后置注解文档规范.
//
// Postdoc 倡导与 ECMAScript 同步进化的文档注释, 而非滞后的.
// 长久以来, 下列现象不仅仅出现在 ECMAScript 项目中:
//
// - 文档注释是前置的, 生成的文档却是后置的
// - 为了让文档工具正常工作大量使用 comment tags
// - 看源码时先寻找到代码, 然后眼球向上定位注释, 如果注释很长回滚翻页
//
// 形成这种高成本生态有两个重要因素:
//
// - ECMAScript 不支持类型约束
// - 前置注释风格已经成为习惯
//
// Postdoc 后置注解文档可以降低文档生态成本:
//
// - 基于 ECMAScript Modules, 这意味着原生语法能解决的就不用注解
// - 采用 以 `is types` 形式开头的注释表示类型注解, 用于类型检查
// - 采用 以 `re types` 形式开头的注释表示函数的返回类型, 用于类型检查
// - 采用 以 `to types` 形式开头的注释表示扩展动作, 用于文档处理
// - 采用 与 [@babel/parser] AST 结构兼容的对象作为输入源, 依托社区的力量
// - 采用 与 [Markdown] 一致的换行和空白行处理行为, 建立文档格式基础
// - 采用 参数的类型注解是紧跟形参标识符之后行尾(后置)注释, 丢弃无尽的 @parma
// - 采用 后置注释描述的其它文档, 不必紧跟标识符之后
// - 采用 ECMAScript 解构语法描述结构, 甚至不必写成注释形式
// - 忽略 所有的块注释
// - 验证 通过转换类型注解为 [babel-types] 进行, 依托社区的力量
//
// 到目前为止, 本节在注释中已经使用的 Postdoc 后置注解文档写法有:
//
// - 扩展动作 `to license` 用于标注(分类提取) License
// - 类型注解 `is Postdoc` 当注解类型名是它自己时, 表示一个接口类型.
//   显示继承接口不必详细声明每个接口, 如果声明有差异会被鉴定为冲突.
//   不必显示继承接口, 实现相关方法也行, 缺点是必须对接口方法进行详细的声明
// - Markdown 兼容的空白行, headers 符号 `#`, 以及列表符号 '-'
//
// Postdoc 设计灵感来自 [Flow], 由于基于 ECMAScript Modules 形成完全不同的风格.
//
// - 取消 函数参数缺省值等大量注解语法, 进而借助 ECMAScript 原生语法
// - 变更 使用前导单词 `is`, `re`, `to` 和函数风格, 而不是符号 '<>{}[]():=|&'
//
// 应该尽量使用缺省值, 解构等 ECMAScript 原生语法. 兼容性交给 Babel 解决.
{
  postdoc(
     body // is array(ASTNode) 来自 [@babel/parser] 的原始结果
    ,docs // is Docs  处理结果是文档数组, 多次传入不同的 body 会累积文档
  )
    // Postdoc 实例需要实现此方法来处理文档. 算法:
    //
    // - postdoc 实例提取符合 Postdoc 风格的注释以及相关节点生成待处理文档
    // - 依次调用 `is`, `re`, `to` 插件的 postdoc 方法进行文档处理或类型检查
    //
    // re error(null)  返回发生的错误, 如果有的话
    //
    // 如你所见, 前导单词 `re` 专用于函数返回类型, 这样设计是出于易用性.
    // 例如本例, `re` 成为两段注释的分界点, 之前是方法文档, 之后是返回值文档.
    // 提示: 本段增加了缩进, 如果编辑器支持, 本段是可以折叠的.
  {
    return null; // 该语句不可省略, 否则不能通过类型检查
  }
}

export function Docs
  // is type Postdoc 文档
  //
  // 函数依然是 ECMAScript 中的一等公民, 借助解构的威力几乎可以描述所有的类型.
  // 当前 [field-declarations] 未成为正式标准, 当注解 function is type 时,
  // 借助解构来定义类的字段以及方法, 甚至可以进行更深层的后置注解.
  // 提示: 目前深层注解被当做纯注释, 支持深层注解会让复杂度呈指数级提高.
({
  links   = {},   // 提取的 Markdown 风格的连接地址, Key-Value 取值为 id: url.
  all     = [Doc],// 提取生成的所有 Doc, 扁平式结构, 这意味着插件不必深度遍历每一个节点
  doc     = Doc,  // 当前正在处理的 Doc,
  texts   = [],   // 当前正在处理的 text, 每个 Doc 对应一组, 具体类型由插件决定.
                  // 虽然预定义的插件产生的是字符串, 但可能被引入的插件改变.
  results = [[]], // 所有的 texts. 如何使用这些数据由另外的工具决定.
  states  = {}    // 以插件名为 Key, 是否处理完为 Value (初值为 false) 的 Object.
                  // 只有 Value 为 false 的插件会被调用.
                  // 当所有的 Value 值不再发生变化时, 结束处理过程.
}){}

export function Doc({
  node = ASTNode, // 提取自 body 的节点
}){}
// is type Postdoc 文档
//
// 如你所见, 解构支持函数, 借助结构来模拟类的方法.

export function ASTNode({}){}
// is ASTNode 由 [@babel/parser] 生成的一个 AST 节点.
//
// 对来自外部的类型进行详细的注解是一种强耦合, 非常难于维护.
// 所以这里只是注解为空接口, 允许所有的非 null 对象, 未来也许会更丰富.

// 前面的空行是不可缺少的. 文件最后是 [Markdown] 风格的引用连接标签地址.
// 本包的 README.md 中的第一段和 License 部分由本文生成.
// to oops 这几行不应该出现在文档中, 这种情况使用 oops 进行断言.
// 可以使用块注释包裹这几行, Postdoc 忽略所有的块注释.

// [Markdown]: https://daringfireball.net/projects/markdown/syntax
// [Flow]: https://flow.org/
// [@babel/parser]: https://yarn.pm/@babel/parser
// [babel-types]: https://babeljs.io/docs/core-packages/babel-types/
// [AST-programs-body]: https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md#programs
// [field-declarations]: https://github.com/tc39/proposal-class-fields#field-declarations