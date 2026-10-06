// Module ID: 7037
// Function ID: 7038
// Dependencies: [649, 666, 7038]

// Module 7037
import getNative from "getNative" /* 649 */;
import setToArray from "setToArray" /* 666 */;
import noop_mod from "noop" /* 7038 */;

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
