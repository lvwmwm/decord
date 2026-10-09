// Module ID: 16136
// Function ID: 16137
// Dependencies: [648, 665, 16137]

// Module 16136
import getNative from "getNative" /* 648 */;
import setToArray from "setToArray" /* 665 */;
import noop_mod from "noop" /* 16137 */;

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
