// Module ID: 5000
// Function ID: 5001
// Name: allSettled
// Dependencies: [5001, 1459, 5002, 5030, 5003, 5078]

// Module 5000 (allSettled)
import requirePromise from "requirePromise" /* 5001 */;
import _mod5002 from "module_5002" /* 5002 */;
import _mod5003 from "module_5003" /* 5003 */;
import shimAllSettled from "shimAllSettled" /* 5078 */;
import callBind from "callBind" /* 1459 */;
import defineProperty from "module_5030" /* 5030 */;

requirePromise();
let closure_0 = callBind(_mod5002());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5002;
obj.implementation = _mod5003;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
