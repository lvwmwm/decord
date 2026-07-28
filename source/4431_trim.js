// Module ID: 4431
// Function ID: 38971
// Name: trim
// Dependencies: [1379, 4432, 4420, 4435, 4433, 4439]

// Module 4431 (trim)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind(require("getPolyfill")());
function trim(arg0) {
  require(4420) /* RequireObjectCoercible */(arg0);
  return callback(arg0);
}
const obj = {};
obj.getPolyfill = require("getPolyfill");
obj.implementation = require("trim");
obj.shim = require("shimStringTrim");
defineProperty(trim, obj);

export default trim;
