// Module ID: 4608
// Function ID: 4609
// Name: trim
// Dependencies: [1422, 4609, 4597, 4612, 4610, 4616]

// Module 4608 (trim)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind(require("getPolyfill")());
function trim(arg0) {
  require(4597) /* RequireObjectCoercible */(arg0);
  return callback(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("trim");
obj[2] = require("shimStringTrim");
defineProperty(trim, obj);

export default trim;
