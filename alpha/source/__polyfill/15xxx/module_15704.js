// Module ID: 15704
// Function ID: 15705
// Dependencies: [15688, 15705]

// Module 15704
import _mod15688 from "module_15688" /* 15688 */;
import _mod15705 from "module_15705" /* 15705 */;

let closure_2 = _mod15688({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15705(arg0), arg1);
});

export default tmp;
