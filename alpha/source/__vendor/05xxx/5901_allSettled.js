// Module ID: 5901
// Function ID: 5902
// Name: allSettled
// Dependencies: [5902, 1476, 5903, 5931, 5904, 5979]

// Module 5901 (allSettled)
import requirePromise from "requirePromise" /* 5902 */;
import getPolyfill from "getPolyfill" /* 5903 */;
import allSettled2 from "allSettled" /* 5904 */;
import shimAllSettled from "shimAllSettled" /* 5979 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5931 */;

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
