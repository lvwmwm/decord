// Module ID: 4542
// Function ID: 4543
// Name: allSettled
// Dependencies: [4543, 1422, 4544, 4572, 4545, 4620]

// Module 4542 (allSettled)
import callBind from "callBind";
import defineProperty from "defineProperty";

require("requirePromise")();
let closure_0 = callBind(require("getPolyfill")());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("allSettled");
obj[2] = require("shimAllSettled");
defineProperty(allSettled, obj);

export default allSettled;
