// Module ID: 6443
// Function ID: 6444
// Name: allSettled
// Dependencies: [6444, 1474, 6445, 6473, 6446, 6521]

// Module 6443 (allSettled)
import requirePromise from "requirePromise" /* 6444 */;
import getPolyfill from "getPolyfill" /* 6445 */;
import allSettled2 from "allSettled" /* 6446 */;
import shimAllSettled from "shimAllSettled" /* 6521 */;
import callBind from "callBind" /* 1474 */;
import defineProperties from "defineProperties" /* 6473 */;

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
