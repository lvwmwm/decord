// Module ID: 16407
// Function ID: 16408
// Dependencies: [16386]

// Module 16407
import _mod16386 from "module_16386" /* 16386 */;

const tmp = _mod16386.navigator && _mod16386.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
