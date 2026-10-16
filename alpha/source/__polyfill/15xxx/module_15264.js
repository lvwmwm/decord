// Module ID: 15264
// Function ID: 15265
// Dependencies: [15248, 15265]

// Module 15264
import _mod15248 from "module_15248" /* 15248 */;
import _mod15265 from "module_15265" /* 15265 */;

let closure_2 = _mod15248({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15265(arg0), arg1);
});

export default tmp;
