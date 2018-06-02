// to license MIT License <https://github.com/powjs/postdoc/blob/master/LICENSE>

export class Postdoc
// # Postdoc
//
// Postdoc 是在注释中写文档和类型引用的后置文档规范,
// 倡导使用标准 ECMAScript 语法且同步进化.
//
// 长久以来, 下列现象不仅仅出现在 ECMAScript 项目中:
//
// - 文档注释是前置的, 生成的文档却是后置的
// - 为了让文档工具正常工作大量使用 comment tags
// - 看源码时眼球在代码和前置注释间上翻下滚
// - 为了丰富类型系统实现的方言必须经过 transform
// - API 文档和 Document 是两套系统且很难关联
// - 生成的文档根本比不上源码的表现力, 甚至在排版上
//
// 形成这种高成本生态有两个重要因素:
//
// - ECMAScript 不支持类型约束
// - 前置注释风格已经成为习惯
//
// Postdoc 后置文档的目标是降低整个文档系统的成本:
//
// - 使用标准 ECMAScript 语法实现类型描述, 而不是定义类型
// - 使用符合人类阅读习惯的后置注释作为文档, 避免和前置注释冲突
// - 借用 [书的结构] 生成结构化数据以便后续处理, 并且以源代码优先
//
// to normal 规范:
//
// - 基于 [static-type] 实现类型约束(撰写本文时该提案还未进入 stage 0)
// - 文档 是下一个语句(不计算函数参数声明)之前的连续尾注释
// - 采用 `to tag` 形式开头的注释表示标签, 内容是后续 [Markdown] 风格的段落
// - 采用 与 [@babel/parser] AST 结构兼容的对象作为输入源
// - 采用 与 [Markdown] 一致的换行和空白行处理行为, 建立文档格式基础
// - 自动 识别是否采用了 Postdoc 风格, 下列条件之一:
//      0. 包含 '// @postdoc' 顶层注释, 这会加快判断效率
//      0. 包含 `// to tag` 并且是内置可识别的 `tag`
//
// to list(identify) 鉴定算法:
//
// 到目前为止, 本节在注释中已经使用的 Postdoc 后置文档写法有:
//
// - 标签 `to license` 标注 License
// - Markdown 兼容的空白行, headers 符号 `#`, 以及列表符号 '-'
// - 标签 `to normal` 标注规范
// - 标签 `to list(identify)` 标注文档行为, 提取所有 `identify` 标签的数据
//
// 您应该明白对于 Postdoc 来说标签只是采用函数调用格式的字符串,
// 通常这些标签名都是语义化的单词, 具体行为是靠插件库来实现的.
// 虽然 Postdoc 预制了一些标签插件, 但你可以禁止或替换掉它们.
// 对于未和插件匹配的标签, 依然保留着原始的文本.
{
  postdoc(
    body = [ASTNode], // 来自 [@babel/parser] 的原始结果
    book = Book,      // 处理结果是文档数组, 多次传入 body 会累积文档
  )
    // Postdoc 实例需要实现此方法来处理文档. 算法:
    //
    // - postdoc 实例提取符合 Postdoc 风格的注释以及相关节点生成待处理文档
    // - 依次调用 `is`, `re`, `to` 插件的 postdoc 方法进行文档处理或类型检查
    //
    // 如你所见, 可以直接用缺省值语法在函数中描述每一个参数的类型.
    // 显然这种方法只适用于抽象方法, 因为抽象方法总是应该被覆盖的.
    //
    // 提示: 本段增加了缩进, 如果编辑器支持, 本段是可以折叠的.
  {
    void Error; // 返回类型为 Error, 允许 undefined
  }
}

export class Book {
  // 书样, 对应一个 package
  constructor() {
    void {
      foreword: void [[String]], // 前言
      list    : void [[Part]],     // 章节列表(组成部分)
      licenses: void [[String]], // 版权内容
    };
  }
}


export class Part {
  // 章节, 对应一个 module 或 class
  constructor() {
    void {
      node : void ASTNode,
      links: void(Object)||{},
        // 提取的 Markdown 风格的连接地址, Key-Value 取值为 id: url.
    };
  }
}

export class Body {
  // 正文, 对应一个函数,方法, 对象
}

export class Content {
  // Body 的内容
}

export class ASTNode {
  // 由 [@babel/parser] 生成的一个 AST 节点.
  //
  // 对来自外部的类型进行详细的提示是一种强耦合, 非常难于维护.
  // 所以这里不约束具体结构
}

export class Tag {
  // 标签. 标签可被同名的插件处理.
  constructor() {
    void {
      name    :void String,          // 标签名
      trailing:void String,          // name 之后的文本
      details :void [String,Object]  // 后续的多行原始文本, 或转化处理结果
    };
  }
}

// 前面的空行是不可缺少的. 文件最后是 [Markdown] 风格的引用连接标签地址.
// 本包的 README.md 中的第一段和 License 部分由本文生成.
// to oops 这几行不应该出现在文档中, 这种情况使用 oops 进行断言.
// 可以使用块注释包裹这几行, Postdoc 忽略所有的块注释.

// [Markdown]: https://daringfireball.net/projects/markdown/syntax
// [@babel/parser]: https://yarn.pm/@babel/parser
// [babel-types]: https://babeljs.io/docs/core-packages/babel-types/
// [AST-programs-body]: https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md#programs
// [static-type]: https://github.com/achun/proposal-static-type-constraints-features
// [书的结构]: https://zh.wikipedia.org/wiki/%E5%9B%BE%E4%B9%A6#%E6%9B%B8%E7%9A%84%E7%B5%90%E6%A7%8B