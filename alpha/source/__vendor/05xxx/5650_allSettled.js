// Module ID: 5650
// Function ID: 5651
// Name: allSettled
// Dependencies: [5651, 1474, 5652, 5680, 5653, 5728]

// Module 5650 (allSettled)
import requirePromise from "requirePromise" /* 5651 */;
import getPolyfill from "getPolyfill" /* 5652 */;
import allSettled2 from "allSettled" /* 5653 */;
import shimAllSettled from "shimAllSettled" /* 5728 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5680 */;

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
