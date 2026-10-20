// Module ID: 15373
// Function ID: 15374
// Dependencies: [15352]

// Module 15373
import _mod15352 from "module_15352" /* 15352 */;

const tmp = _mod15352.navigator && _mod15352.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
