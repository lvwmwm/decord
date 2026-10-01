// Module ID: 7033
// Function ID: 7034
// Dependencies: [637, 654, 7034]

// Module 7033
import getNative from "getNative" /* 637 */;
import setToArray from "setToArray" /* 654 */;
import noop_mod from "noop" /* 7034 */;

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
