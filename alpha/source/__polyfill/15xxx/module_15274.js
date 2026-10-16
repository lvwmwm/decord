// Module ID: 15274
// Function ID: 15275
// Dependencies: [15258, 15275]

// Module 15274
import _mod15258 from "module_15258" /* 15258 */;
import _mod15275 from "module_15275" /* 15275 */;

let closure_2 = _mod15258({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15275(arg0), arg1);
});

export default tmp;
