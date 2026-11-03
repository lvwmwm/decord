// Module ID: 6576
// Function ID: 6577
// Name: allSettled
// Dependencies: [6577, 1470, 6578, 6606, 6579, 6654]

// Module 6576 (allSettled)
import requirePromise from "requirePromise" /* 6577 */;
import getPolyfill from "getPolyfill" /* 6578 */;
import allSettled2 from "allSettled" /* 6579 */;
import shimAllSettled from "shimAllSettled" /* 6654 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6606 */;

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
