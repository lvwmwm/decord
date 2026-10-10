// Module ID: 5645
// Function ID: 5646
// Name: allSettled
// Dependencies: [5646, 1474, 5647, 5675, 5648, 5723]

// Module 5645 (allSettled)
import requirePromise from "requirePromise" /* 5646 */;
import getPolyfill from "getPolyfill" /* 5647 */;
import allSettled2 from "allSettled" /* 5648 */;
import shimAllSettled from "shimAllSettled" /* 5723 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 5675 */;

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
