// Module ID: 6594
// Function ID: 6595
// Name: allSettled
// Dependencies: [6595, 1470, 6596, 6624, 6597, 6672]

// Module 6594 (allSettled)
import requirePromise from "requirePromise" /* 6595 */;
import getPolyfill from "getPolyfill" /* 6596 */;
import allSettled2 from "allSettled" /* 6597 */;
import shimAllSettled from "shimAllSettled" /* 6672 */;
import callBind from "callBind" /* 1470 */;
import defineProperties from "defineProperties" /* 6624 */;

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
