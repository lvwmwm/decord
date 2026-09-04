// Module ID: 4764
// Function ID: 4765
// Name: allSettled
// Dependencies: [4765, 1418, 4766, 4794, 4767, 4842]

// Module 4764 (allSettled)
import requirePromise from "requirePromise" /* 4765 */;
import getPolyfill from "getPolyfill" /* 4766 */;
import allSettled2 from "allSettled" /* 4767 */;
import shimAllSettled from "shimAllSettled" /* 4842 */;
import callBind from "callBind" /* 1418 */;
import defineProperty from "defineProperty" /* 4794 */;

requirePromise();
let closure_0 = callBind(getPolyfill());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = getPolyfill;
obj[1] = allSettled2;
obj[2] = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
