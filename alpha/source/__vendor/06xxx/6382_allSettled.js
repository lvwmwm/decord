// Module ID: 6382
// Function ID: 6383
// Name: allSettled
// Dependencies: [6383, 1476, 6384, 6412, 6385, 6460]

// Module 6382 (allSettled)
import requirePromise from "requirePromise" /* 6383 */;
import getPolyfill from "getPolyfill" /* 6384 */;
import allSettled2 from "allSettled" /* 6385 */;
import shimAllSettled from "shimAllSettled" /* 6460 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6412 */;

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
