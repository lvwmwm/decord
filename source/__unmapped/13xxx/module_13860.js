// Module ID: 13860
// Function ID: 13861
// Dependencies: [13839]

// Module 13860
import _mod13839 from "module_13839" /* 13839 */;

const tmp = _mod13839.navigator && _mod13839.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
