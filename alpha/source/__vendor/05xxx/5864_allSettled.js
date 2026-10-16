// Module ID: 5864
// Function ID: 5865
// Name: allSettled
// Dependencies: [5865, 1476, 5866, 5894, 5867, 5942]

// Module 5864 (allSettled)
import requirePromise from "requirePromise" /* 5865 */;
import getPolyfill from "getPolyfill" /* 5866 */;
import allSettled2 from "allSettled" /* 5867 */;
import shimAllSettled from "shimAllSettled" /* 5942 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5894 */;

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
