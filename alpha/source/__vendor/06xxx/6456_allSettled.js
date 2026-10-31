// Module ID: 6456
// Function ID: 6457
// Name: allSettled
// Dependencies: [6457, 1468, 6458, 6486, 6459, 6534]

// Module 6456 (allSettled)
import requirePromise from "requirePromise" /* 6457 */;
import getPolyfill from "getPolyfill" /* 6458 */;
import allSettled2 from "allSettled" /* 6459 */;
import shimAllSettled from "shimAllSettled" /* 6534 */;
import callBind from "callBind" /* 1468 */;
import defineProperties from "defineProperties" /* 6486 */;

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
