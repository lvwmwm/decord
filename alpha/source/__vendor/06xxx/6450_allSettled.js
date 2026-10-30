// Module ID: 6450
// Function ID: 6451
// Name: allSettled
// Dependencies: [6451, 1469, 6452, 6480, 6453, 6528]

// Module 6450 (allSettled)
import requirePromise from "requirePromise" /* 6451 */;
import getPolyfill from "getPolyfill" /* 6452 */;
import allSettled2 from "allSettled" /* 6453 */;
import shimAllSettled from "shimAllSettled" /* 6528 */;
import callBind from "callBind" /* 1469 */;
import defineProperties from "defineProperties" /* 6480 */;

let tmp = requirePromise();
let closure_0 = callBind(getPolyfill());
function allSettled(arg0) {
  let self = this;
  const tmp = closure_0;
  if (undefined === this) {
    self = Promise;
  }
  return tmp(self, arg0);
}
const obj = { getPolyfill, implementation: allSettled2, shim: shimAllSettled };
defineProperties(allSettled, obj);

export default allSettled;
