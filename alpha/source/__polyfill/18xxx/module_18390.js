// Module ID: 18390
// Function ID: 18391
// Dependencies: [636, 653, 18391]

// Module 18390
import getNative from "getNative" /* 636 */;
import setToArray from "setToArray" /* 653 */;
import noop_mod from "noop" /* 18391 */;

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
