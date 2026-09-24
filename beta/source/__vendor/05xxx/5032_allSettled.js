// Module ID: 5032
// Function ID: 5033
// Name: allSettled
// Dependencies: [5033, 1459, 5034, 5062, 5035, 5110]

// Module 5032 (allSettled)
import requirePromise from "requirePromise" /* 5033 */;
import _mod5034 from "module_5034" /* 5034 */;
import _mod5035 from "module_5035" /* 5035 */;
import shimAllSettled from "shimAllSettled" /* 5110 */;
import callBind from "callBind" /* 1459 */;
import defineProperty from "module_5062" /* 5062 */;

requirePromise();
let closure_0 = callBind(_mod5034());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5034;
obj.implementation = _mod5035;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
