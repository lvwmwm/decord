// Module ID: 17138
// Function ID: 17139
// Dependencies: [648, 665, 17139]

// Module 17138
import getNative from "getNative" /* 648 */;
import setToArray from "setToArray" /* 665 */;
import noop_mod from "noop" /* 17139 */;

if (getNative) {
  let noop;
  const _module = setToArray;
  const items = [, -0];
  const self = this;
  const self2 = this;
  const tmp3 = new getNative(items);
  if (1 / _module(tmp3)[1] === Infinity) {
    noop = (arg0) => {
      const tmp = new getNative(arg0);
      return tmp;
    };
  }
  module.exports = noop;
}
let noop = noop_mod;
