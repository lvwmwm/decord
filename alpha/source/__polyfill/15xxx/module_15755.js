// Module ID: 15755
// Function ID: 15756
// Dependencies: [15739, 15756]

// Module 15755
import _mod15739 from "module_15739" /* 15739 */;
import _mod15756 from "module_15756" /* 15756 */;

let closure_2 = _mod15739({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15756(arg0), arg1);
});

export default tmp;
