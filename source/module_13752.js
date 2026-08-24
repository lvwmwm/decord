// Module ID: 13752
// Function ID: 13753
// Dependencies: [13731]

// Module 13752
import _mod13731 from "module_13731" /* 13731 */;

const tmp = _mod13731.navigator && _mod13731.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
