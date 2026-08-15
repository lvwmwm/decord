// Module ID: 4411
// Function ID: 4412
// Name: trim
// Dependencies: [1422, 4412, 4400, 4415, 4413, 4419]

// Module 4411 (trim)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind(require("getPolyfill")());
function trim(arg0) {
  require(4400) /* RequireObjectCoercible */(arg0);
  return callback(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("trim");
obj[2] = require("shimStringTrim");
defineProperty(trim, obj);

export default trim;
