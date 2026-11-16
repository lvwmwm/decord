// Module ID: 18510
// Function ID: 18511
// Dependencies: [636, 653, 18511]

// Module 18510
import getNative from "getNative" /* 636 */;
import setToArray from "setToArray" /* 653 */;
import noop_mod from "noop" /* 18511 */;

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
