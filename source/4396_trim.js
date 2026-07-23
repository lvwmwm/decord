// Module ID: 4396
// Function ID: 38844
// Name: trim
// Dependencies: [1379, 4397, 4385, 4400, 4398, 4404]

// Module 4396 (trim)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind(require("getPolyfill")());
function trim(arg0) {
  require(4385) /* RequireObjectCoercible */(arg0);
  return callback(arg0);
}
const obj = {};
obj.getPolyfill = require("getPolyfill");
obj.implementation = require("trim");
obj.shim = require("shimStringTrim");
defineProperty(trim, obj);

export default trim;
