// Module ID: 4385
// Function ID: 4386
// Name: allSettled
// Dependencies: [4386, 1422, 4387, 4415, 4388, 4463]

// Module 4385 (allSettled)
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
