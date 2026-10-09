// Module ID: 5642
// Function ID: 5643
// Name: allSettled
// Dependencies: [5643, 1474, 5644, 5672, 5645, 5720]

// Module 5642 (allSettled)
import requirePromise from "requirePromise" /* 5643 */;
import getPolyfill from "getPolyfill" /* 5644 */;
import allSettled2 from "allSettled" /* 5645 */;
import shimAllSettled from "shimAllSettled" /* 5720 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5672 */;

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
