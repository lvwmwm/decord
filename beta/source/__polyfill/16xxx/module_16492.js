// Module ID: 16492
// Function ID: 16493
// Dependencies: [16471]

// Module 16492
import _mod16471 from "module_16471" /* 16471 */;

const tmp = _mod16471.navigator && _mod16471.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
