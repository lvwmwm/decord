// Module ID: 6385
// Function ID: 6386
// Name: allSettled
// Dependencies: [6386, 1473, 6387, 6415, 6388, 6463]

// Module 6385 (allSettled)
import requirePromise from "requirePromise" /* 6386 */;
import getPolyfill from "getPolyfill" /* 6387 */;
import allSettled2 from "allSettled" /* 6388 */;
import shimAllSettled from "shimAllSettled" /* 6463 */;
import callBind from "callBind" /* 1473 */;
import defineProperties from "defineProperties" /* 6415 */;

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
