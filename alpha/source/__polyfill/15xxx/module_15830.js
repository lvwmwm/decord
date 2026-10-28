// Module ID: 15830
// Function ID: 15831
// Dependencies: [15814, 15831]

// Module 15830
import _mod15814 from "module_15814" /* 15814 */;
import _mod15831 from "module_15831" /* 15831 */;

let closure_2 = _mod15814({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod15831(arg0), arg1);
});

export default tmp;
