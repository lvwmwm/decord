// Module ID: 6419
// Function ID: 6420
// Name: allSettled
// Dependencies: [6420, 1473, 6421, 6449, 6422, 6497]

// Module 6419 (allSettled)
import requirePromise from "requirePromise" /* 6420 */;
import getPolyfill from "getPolyfill" /* 6421 */;
import allSettled2 from "allSettled" /* 6422 */;
import shimAllSettled from "shimAllSettled" /* 6497 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 6449 */;

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
