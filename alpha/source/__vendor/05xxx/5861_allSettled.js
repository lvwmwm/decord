// Module ID: 5861
// Function ID: 5862
// Name: allSettled
// Dependencies: [5862, 1474, 5863, 5891, 5864, 5939]

// Module 5861 (allSettled)
import requirePromise from "requirePromise" /* 5862 */;
import getPolyfill from "getPolyfill" /* 5863 */;
import allSettled2 from "allSettled" /* 5864 */;
import shimAllSettled from "shimAllSettled" /* 5939 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5891 */;

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
