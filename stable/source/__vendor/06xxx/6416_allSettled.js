// Module ID: 6416
// Function ID: 6417
// Name: allSettled
// Dependencies: [6417, 1476, 6418, 6446, 6419, 6494]

// Module 6416 (allSettled)
import requirePromise from "requirePromise" /* 6417 */;
import getPolyfill from "getPolyfill" /* 6418 */;
import allSettled2 from "allSettled" /* 6419 */;
import shimAllSettled from "shimAllSettled" /* 6494 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6446 */;

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
