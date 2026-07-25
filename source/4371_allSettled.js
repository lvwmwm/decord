// Module ID: 4371
// Function ID: 38798
// Name: allSettled
// Dependencies: [4372, 1379, 4373, 4401, 4374, 4449]

// Module 4371 (allSettled)
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
