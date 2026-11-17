// Module ID: 16805
// Function ID: 16806
// Dependencies: [16789, 16806]

// Module 16805
import _mod16789 from "module_16789" /* 16789 */;
import _mod16806 from "module_16806" /* 16806 */;

let closure_2 = _mod16789({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod16806(arg0), arg1);
});

export default tmp;
