// Module ID: 14551
// Function ID: 14552
// Dependencies: [14535, 14552]

// Module 14551
import _mod14535 from "module_14535" /* 14535 */;
import _mod14552 from "module_14552" /* 14552 */;

let closure_2 = _mod14535({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod14552(arg0), arg1);
});

export default tmp;
