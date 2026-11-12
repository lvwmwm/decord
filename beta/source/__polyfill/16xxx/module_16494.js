// Module ID: 16494
// Function ID: 16495
// Dependencies: [16473]

// Module 16494
import _mod16473 from "module_16473" /* 16473 */;

const tmp = _mod16473.navigator && _mod16473.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
