// Module ID: 6591
// Function ID: 6592
// Name: allSettled
// Dependencies: [6592, 1470, 6593, 6621, 6594, 6669]

// Module 6591 (allSettled)
import requirePromise from "requirePromise" /* 6592 */;
import getPolyfill from "getPolyfill" /* 6593 */;
import allSettled2 from "allSettled" /* 6594 */;
import shimAllSettled from "shimAllSettled" /* 6669 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6621 */;

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
