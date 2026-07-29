// Module ID: 4454
// Function ID: 4455
// Name: trim
// Dependencies: [1403, 4455, 4443, 4458, 4456, 4462]

// Module 4454 (trim)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind(require("getPolyfill")());
function trim(arg0) {
  require(4443) /* RequireObjectCoercible */(arg0);
  return callback(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("trim");
obj[2] = require("shimStringTrim");
defineProperty(trim, obj);

export default trim;
