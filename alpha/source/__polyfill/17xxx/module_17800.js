// Module ID: 17800
// Function ID: 17801
// Dependencies: [636, 653, 17801]

// Module 17800
import getNative from "getNative" /* 636 */;
import setToArray from "setToArray" /* 653 */;
import noop_mod from "noop" /* 17801 */;

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
