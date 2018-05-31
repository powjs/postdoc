import {Postdoc} from './interfaces';
import deprecate from './to-deprecate';
import example   from './to-example';
import group     from './to-group';
import issue     from './to-issue';
import license   from './to-license';
import list      from './to-list';
import oops      from './to-oops';

class to extends Postdoc {
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
// is to
{
  return new to();
}