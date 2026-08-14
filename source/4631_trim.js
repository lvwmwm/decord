// Module ID: 4631
// Function ID: 4632
// Name: trim
// Dependencies: [1422, 4632, 4620, 4635, 4633, 4639]

// Module 4631 (trim)
import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind(require("getPolyfill")());
function trim(arg0) {
  require(4620) /* RequireObjectCoercible */(arg0);
  return callback(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("trim");
obj[2] = require("shimStringTrim");
defineProperty(trim, obj);

export default trim;
