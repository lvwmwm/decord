// Module ID: 15561
// Function ID: 15562
// Dependencies: [15545, 15562]

// Module 15561
import _mod15545 from "module_15545" /* 15545 */;
import _mod15562 from "module_15562" /* 15562 */;

let closure_2 = _mod15545({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15562(arg0), arg1);
});

export default tmp;
