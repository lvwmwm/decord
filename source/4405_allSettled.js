// Module ID: 4405
// Function ID: 38913
// Name: allSettled
// Dependencies: [4406, 1379, 4407, 4435, 4408, 4483]

// Module 4405 (allSettled)
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
const obj = {};
obj.getPolyfill = require("getPolyfill");
obj.implementation = require("allSettled");
obj.shim = require("shimAllSettled");
defineProperty(allSettled, obj);

export default allSettled;
