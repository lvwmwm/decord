// Module ID: 15722
// Function ID: 15723
// Dependencies: [648, 665, 15723]

// Module 15722
import getNative from "getNative" /* 648 */;
import setToArray from "setToArray" /* 665 */;
import noop_mod from "noop" /* 15723 */;

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
