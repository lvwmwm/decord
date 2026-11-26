// Module ID: 15571
// Function ID: 15572
// Dependencies: [15550]

// Module 15571
import _mod15550 from "module_15550" /* 15550 */;

const tmp = _mod15550.navigator && _mod15550.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
