// Module ID: 5093
// Function ID: 5094
// Name: allSettled
// Dependencies: [5094, 1456, 5095, 5123, 5096, 5171]

// Module 5093 (allSettled)
import requirePromise from "requirePromise" /* 5094 */;
import getPolyfill from "getPolyfill" /* 5095 */;
import allSettled2 from "allSettled" /* 5096 */;
import shimAllSettled from "shimAllSettled" /* 5171 */;
import callBind from "callBind" /* 1456 */;
import defineProperties from "defineProperties" /* 5123 */;

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
