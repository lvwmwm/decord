// Module ID: 15567
// Function ID: 15568
// Dependencies: [15551, 15568]

// Module 15567
import _mod15551 from "module_15551" /* 15551 */;
import _mod15568 from "module_15568" /* 15568 */;

let closure_2 = _mod15551({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15568(arg0), arg1);
});

export default tmp;
