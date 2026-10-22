// Module ID: 6370
// Function ID: 6371
// Name: allSettled
// Dependencies: [6371, 1476, 6372, 6400, 6373, 6448]

// Module 6370 (allSettled)
import requirePromise from "requirePromise" /* 6371 */;
import getPolyfill from "getPolyfill" /* 6372 */;
import allSettled2 from "allSettled" /* 6373 */;
import shimAllSettled from "shimAllSettled" /* 6448 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 6400 */;

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
