// Module ID: 4722
// Function ID: 4723
// Name: allSettled
// Dependencies: [4723, 1422, 4724, 4752, 4725, 4800]

// Module 4722 (allSettled)
import requirePromise from "requirePromise" /* 4723 */;
import getPolyfill from "getPolyfill" /* 4724 */;
import allSettled2 from "allSettled" /* 4725 */;
import shimAllSettled from "shimAllSettled" /* 4800 */;
import callBind from "callBind" /* 1422 */;
import defineProperty from "defineProperty" /* 4752 */;

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
