// Module ID: 5330
// Function ID: 5331
// Name: allSettled
// Dependencies: [5331, 1461, 5332, 5360, 5333, 5408]

// Module 5330 (allSettled)
import requirePromise from "requirePromise" /* 5331 */;
import getPolyfill from "getPolyfill" /* 5332 */;
import allSettled2 from "allSettled" /* 5333 */;
import shimAllSettled from "shimAllSettled" /* 5408 */;
import callBind from "callBind" /* 1461 */;
import defineProperties from "defineProperties" /* 5360 */;

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
