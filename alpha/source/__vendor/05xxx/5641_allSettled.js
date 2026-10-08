// Module ID: 5641
// Function ID: 5642
// Name: allSettled
// Dependencies: [5642, 1473, 5643, 5671, 5644, 5719]

// Module 5641 (allSettled)
import requirePromise from "requirePromise" /* 5642 */;
import getPolyfill from "getPolyfill" /* 5643 */;
import allSettled2 from "allSettled" /* 5644 */;
import shimAllSettled from "shimAllSettled" /* 5719 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 5671 */;

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
