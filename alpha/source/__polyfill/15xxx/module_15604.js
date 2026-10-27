// Module ID: 15604
// Function ID: 15605
// Dependencies: [15588, 15605]

// Module 15604
import _mod15588 from "module_15588" /* 15588 */;
import _mod15605 from "module_15605" /* 15605 */;

let closure_2 = _mod15588({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15605(arg0), arg1);
});

export default tmp;
