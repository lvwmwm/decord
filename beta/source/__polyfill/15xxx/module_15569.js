// Module ID: 15569
// Function ID: 15570
// Dependencies: [15553, 15570]

// Module 15569
import _mod15553 from "module_15553" /* 15553 */;
import _mod15570 from "module_15570" /* 15570 */;

let closure_2 = _mod15553({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15570(arg0), arg1);
});

export default tmp;
