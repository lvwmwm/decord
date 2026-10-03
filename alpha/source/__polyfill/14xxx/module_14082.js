// Module ID: 14082
// Function ID: 14083
// Dependencies: [14066, 14083]

// Module 14082
import _mod14066 from "module_14066" /* 14066 */;
import _mod14083 from "module_14083" /* 14083 */;

let closure_2 = _mod14066({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod14083(arg0), arg1);
});

export default tmp;
