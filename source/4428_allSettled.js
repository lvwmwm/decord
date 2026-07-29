// Module ID: 4428
// Function ID: 4429
// Name: allSettled
// Dependencies: [4429, 1403, 4430, 4458, 4431, 4506]

// Module 4428 (allSettled)
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
