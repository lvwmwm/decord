// Module ID: 6338
// Function ID: 6339
// Name: allSettled
// Dependencies: [6339, 1476, 6340, 6368, 6341, 6416]

// Module 6338 (allSettled)
import requirePromise from "requirePromise" /* 6339 */;
import getPolyfill from "getPolyfill" /* 6340 */;
import allSettled2 from "allSettled" /* 6341 */;
import shimAllSettled from "shimAllSettled" /* 6416 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6368 */;

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
