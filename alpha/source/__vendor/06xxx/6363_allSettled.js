// Module ID: 6363
// Function ID: 6364
// Name: allSettled
// Dependencies: [6364, 1476, 6365, 6393, 6366, 6441]

// Module 6363 (allSettled)
import requirePromise from "requirePromise" /* 6364 */;
import getPolyfill from "getPolyfill" /* 6365 */;
import allSettled2 from "allSettled" /* 6366 */;
import shimAllSettled from "shimAllSettled" /* 6441 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6393 */;

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
