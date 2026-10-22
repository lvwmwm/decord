// Module ID: 6369
// Function ID: 6370
// Name: allSettled
// Dependencies: [6370, 1476, 6371, 6399, 6372, 6447]

// Module 6369 (allSettled)
import requirePromise from "requirePromise" /* 6370 */;
import getPolyfill from "getPolyfill" /* 6371 */;
import allSettled2 from "allSettled" /* 6372 */;
import shimAllSettled from "shimAllSettled" /* 6447 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6399 */;

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
