// Module ID: 6384
// Function ID: 6385
// Name: allSettled
// Dependencies: [6385, 1476, 6386, 6414, 6387, 6462]

// Module 6384 (allSettled)
import requirePromise from "requirePromise" /* 6385 */;
import getPolyfill from "getPolyfill" /* 6386 */;
import allSettled2 from "allSettled" /* 6387 */;
import shimAllSettled from "shimAllSettled" /* 6462 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6414 */;

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
