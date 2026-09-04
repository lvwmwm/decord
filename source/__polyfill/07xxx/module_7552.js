// Module ID: 7552
// Function ID: 7553
// Dependencies: [770, 787, 7553]

// Module 7552
import getNative from "getNative" /* 770 */;
import setToArray from "setToArray" /* 787 */;
import noop from "noop" /* 7553 */;

if (getNative) {
  const _module = setToArray;
  const items = [, -0];
  const tmp5 = new getNative(items);
  if (1 / _module(tmp5)[1] === Infinity) {
    let noop = (arg0) => new getNative(arg0);
  }
  module.exports = noop;
}
