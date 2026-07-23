// Module ID: 4370
// Function ID: 38786
// Name: allSettled
// Dependencies: [4371, 1379, 4372, 4400, 4373, 4448]

// Module 4370 (allSettled)
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
