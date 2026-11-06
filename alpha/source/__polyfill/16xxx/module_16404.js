// Module ID: 16404
// Function ID: 16405
// Dependencies: [16383]

// Module 16404
import _mod16383 from "module_16383" /* 16383 */;

const tmp = _mod16383.navigator && _mod16383.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
