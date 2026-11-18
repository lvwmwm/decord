// Module ID: 15486
// Function ID: 15487
// Dependencies: [15465]

// Module 15486
import _mod15465 from "module_15465" /* 15465 */;

const tmp = _mod15465.navigator && _mod15465.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
