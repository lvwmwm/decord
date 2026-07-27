// Module ID: 4397
// Function ID: 38857
// Name: trim
// Dependencies: [1379, 4398, 4386, 4401, 4399, 4405]

// Module 4397 (trim)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind(require("getPolyfill")());
function trim(arg0) {
  require(4386) /* RequireObjectCoercible */(arg0);
  return callback(arg0);
}
const obj = {};
obj.getPolyfill = require("getPolyfill");
obj.implementation = require("trim");
obj.shim = require("shimStringTrim");
defineProperty(trim, obj);

export default trim;
