// Module ID: 15602
// Function ID: 15603
// Dependencies: [15586, 15603]

// Module 15602
import _mod15586 from "module_15586" /* 15586 */;
import _mod15603 from "module_15603" /* 15603 */;

let closure_2 = _mod15586({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15603(arg0), arg1);
});

export default tmp;
