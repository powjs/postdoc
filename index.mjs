export default
class Postdoc
// :Postdoc 的目标是以最低的成本在 ECMAScript 源码中写文档注释.
// 
// 长久以来, 开发者从未意识到他们遵循的注释风格和规范是非人性化的.
// 下列现象不仅仅出现在 ECMAScript 源码中:
//
// - 文档注释是前置的, 最终的文档却是后置的
// - 为了迁就文档提取工具不厌其烦的使用 comment tags
//
// 这种畸形生态形成的原因有两个:
//
// - ECMAScript 没有严格的类型约束语法
// - 注释前置的惯性非常巨大
//
// Postdoc 后置文档规范可以很好的解决这些问题:
//
// - 文档注释紧跟它所解释的标识符之后
// - 用于 ECMAScript Modules 源码
// - 采用 [Flow] 类型系统
// - 采用 [@babel/parser] 返回的 AST
// - 采用 Markdown 兼容的语法风格, 比如对空行的处理方式, 列表, 连接(@links)等
// - 对于 ECMAScript 语法无法表达的语义类型使用 @tag, 但肯定是第一个单词
// - 最终 可以通过转换为 [Flow] AST 来检验类型注解的合法性
//
// 本节一开始就使用了一个 tag :Postdoc
//
// - :Class 一个类继承了自己, 这表示该类是一个接口, 位于注释的最前面
//
{
  constructor
  // 构造函数什么都不做
  //
  // 函数的名字是函数的标识符, 所以注释文档位于括号之前
  () {}

  postdoc
  // Postdoc 实例需要实现该接口函数来处理文档
  (
     ast // :Object       由 [@babel/parser] 返回的 AST 对象
    ,doc // :Array=[]     处理结果
  )
  // :Error|null   返回发生的错误, 如果有的话
  {
    return null; // 不可省略
  }
}

// 文件最后是 [Markdown] 风格的引用连接标签地址
//
// [Markdown]: https://daringfireball.net/projects/markdown/syntax
// [Flow]: https://flow.org
// [@babel/parser]: https://yarn.pm/@babel/parser