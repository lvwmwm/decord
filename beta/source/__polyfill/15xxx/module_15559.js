// Module ID: 15559
// Function ID: 15560
// Dependencies: [15543, 15560]

// Module 15559
import _mod15543 from "module_15543" /* 15543 */;
import _mod15560 from "module_15560" /* 15560 */;

let closure_2 = _mod15543({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15560(arg0), arg1);
});

export default tmp;
