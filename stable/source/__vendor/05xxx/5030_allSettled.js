// Module ID: 5030
// Function ID: 5031
// Name: allSettled
// Dependencies: [5031, 1455, 5032, 5060, 5033, 5108]

// Module 5030 (allSettled)
import requirePromise from "requirePromise" /* 5031 */;
import _mod5032 from "module_5032" /* 5032 */;
import _mod5033 from "module_5033" /* 5033 */;
import shimAllSettled from "shimAllSettled" /* 5108 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5060" /* 5060 */;

requirePromise();
let closure_0 = callBind(_mod5032());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5032;
obj.implementation = _mod5033;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
