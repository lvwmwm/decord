// Module ID: 5086
// Function ID: 5087
// Name: allSettled
// Dependencies: [5087, 1455, 5088, 5116, 5089, 5164]

// Module 5086 (allSettled)
import requirePromise from "requirePromise" /* 5087 */;
import _mod5088 from "module_5088" /* 5088 */;
import _mod5089 from "module_5089" /* 5089 */;
import shimAllSettled from "shimAllSettled" /* 5164 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5116" /* 5116 */;

requirePromise();
let closure_0 = callBind(_mod5088());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5088;
obj.implementation = _mod5089;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
