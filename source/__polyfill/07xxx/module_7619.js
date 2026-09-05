// Module ID: 7619
// Function ID: 7620
// Dependencies: [637, 654, 7620]

// Module 7619
import getNative from "getNative" /* 637 */;
import setToArray from "setToArray" /* 654 */;
import noop from "noop" /* 7620 */;

if (getNative) {
  const _module = setToArray;
  const items = [, -0];
  const tmp5 = new getNative(items);
  if (1 / _module(tmp5)[1] === Infinity) {
    let noop = (arg0) => new getNative(arg0);
  }
  module.exports = noop;
}
