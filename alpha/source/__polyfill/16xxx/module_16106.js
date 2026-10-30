// Module ID: 16106
// Function ID: 16107
// Dependencies: [16090, 16107]

// Module 16106
import _mod16090 from "module_16090" /* 16090 */;
import _mod16107 from "module_16107" /* 16107 */;

let closure_2 = _mod16090({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod16107(arg0), arg1);
});

export default tmp;
