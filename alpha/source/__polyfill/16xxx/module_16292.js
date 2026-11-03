// Module ID: 16292
// Function ID: 16293
// Dependencies: [16271]

// Module 16292
import _mod16271 from "module_16271" /* 16271 */;

const tmp = _mod16271.navigator && _mod16271.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
