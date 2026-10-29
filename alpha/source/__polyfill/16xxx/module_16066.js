// Module ID: 16066
// Function ID: 16067
// Dependencies: [16050, 16067]

// Module 16066
import _mod16050 from "module_16050" /* 16050 */;
import _mod16067 from "module_16067" /* 16067 */;

let closure_2 = _mod16050({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod16067(arg0), arg1);
});

export default tmp;
