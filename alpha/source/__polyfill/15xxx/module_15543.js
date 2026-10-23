// Module ID: 15543
// Function ID: 15544
// Dependencies: [15527, 15544]

// Module 15543
import _mod15527 from "module_15527" /* 15527 */;
import _mod15544 from "module_15544" /* 15544 */;

let closure_2 = _mod15527({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15544(arg0), arg1);
});

export default tmp;
