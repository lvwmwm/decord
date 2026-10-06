// Module ID: 5094
// Function ID: 5095
// Name: allSettled
// Dependencies: [5095, 1462, 5096, 5124, 5097, 5172]

// Module 5094 (allSettled)
import requirePromise from "requirePromise" /* 5095 */;
import getPolyfill from "getPolyfill" /* 5096 */;
import allSettled2 from "allSettled" /* 5097 */;
import shimAllSettled from "shimAllSettled" /* 5172 */;
import callBind from "callBind" /* 1462 */;
import defineProperties from "defineProperties" /* 5124 */;

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
