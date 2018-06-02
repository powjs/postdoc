import {Postdoc} from './types';
import deprecate from './to-deprecate';
import example   from './to-example';
import issue     from './to-issue';
import license   from './to-license';
import list      from './to-list';
import oops      from './to-oops';
import normal    from './to-normal';

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