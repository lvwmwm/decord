// Module ID: 16452
// Function ID: 16453
// Dependencies: [16431]

// Module 16452
import _mod16431 from "module_16431" /* 16431 */;

const tmp = _mod16431.navigator && _mod16431.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
