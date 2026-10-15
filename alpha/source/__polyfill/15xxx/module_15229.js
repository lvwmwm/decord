// Module ID: 15229
// Function ID: 15230
// Dependencies: [15213, 15230]

// Module 15229
import _mod15213 from "module_15213" /* 15213 */;
import _mod15230 from "module_15230" /* 15230 */;

let closure_2 = _mod15213({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15230(arg0), arg1);
});

export default tmp;
