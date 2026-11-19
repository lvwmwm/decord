// Module ID: 15472
// Function ID: 15473
// Dependencies: [15451]

// Module 15472
import _mod15451 from "module_15451" /* 15451 */;

const tmp = _mod15451.navigator && _mod15451.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
