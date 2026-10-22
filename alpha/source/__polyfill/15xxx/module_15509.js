// Module ID: 15509
// Function ID: 15510
// Dependencies: [15493, 15510]

// Module 15509
import _mod15493 from "module_15493" /* 15493 */;
import _mod15510 from "module_15510" /* 15510 */;

let closure_2 = _mod15493({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15510(arg0), arg1);
});

export default tmp;
