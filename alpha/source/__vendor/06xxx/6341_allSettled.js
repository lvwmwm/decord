// Module ID: 6341
// Function ID: 6342
// Name: allSettled
// Dependencies: [6342, 1476, 6343, 6371, 6344, 6419]

// Module 6341 (allSettled)
import requirePromise from "requirePromise" /* 6342 */;
import getPolyfill from "getPolyfill" /* 6343 */;
import allSettled2 from "allSettled" /* 6344 */;
import shimAllSettled from "shimAllSettled" /* 6419 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6371 */;

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
