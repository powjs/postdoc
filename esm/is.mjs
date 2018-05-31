import {Postdoc} from './interfaces';
import any       from './is-any';
import array     from './is-array';
import boolean   from './is-boolean';
import component from './is-component';
import element   from './is-element';
import error     from './is-error';
import float     from './is-float';
import integer   from './is-integer';
import node      from './is-node';
import object    from './is-object';
import promise   from './is-promise';
import string    from './is-string';
import symbol    from './is-symbol';
import type      from './is-type';

class is extends Postdoc {
  constructor() {

  }

  postdoc(ast, doc) {
    return null;
  }
}

export default function
(
  opts // is object({})
)
// is is
{
  return new is();
}