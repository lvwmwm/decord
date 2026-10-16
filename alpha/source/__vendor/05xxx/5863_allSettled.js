// Module ID: 5863
// Function ID: 5864
// Name: allSettled
// Dependencies: [5864, 1476, 5865, 5893, 5866, 5941]

// Module 5863 (allSettled)
import requirePromise from "requirePromise" /* 5864 */;
import getPolyfill from "getPolyfill" /* 5865 */;
import allSettled2 from "allSettled" /* 5866 */;
import shimAllSettled from "shimAllSettled" /* 5941 */;
import callBind from "callBind" /* 1476 */;
import defineProperties from "defineProperties" /* 5893 */;

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
