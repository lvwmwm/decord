// Module ID: 14579
// Function ID: 14580
// Dependencies: [14563, 14580]

// Module 14579
import _mod14563 from "module_14563" /* 14563 */;
import _mod14580 from "module_14580" /* 14580 */;

let closure_2 = _mod14563({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod14580(arg0), arg1);
});

export default tmp;
