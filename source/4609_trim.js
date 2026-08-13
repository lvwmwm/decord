// Module ID: 4609
// Function ID: 4610
// Name: trim
// Dependencies: [1422, 4610, 4598, 4613, 4611, 4617]

// Module 4609 (trim)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind(require("getPolyfill")());
function trim(arg0) {
  require(4598) /* RequireObjectCoercible */(arg0);
  return callback(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("trim");
obj[2] = require("shimStringTrim");
defineProperty(trim, obj);

export default trim;
