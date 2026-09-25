// Module ID: 13854
// Function ID: 13855
// Dependencies: [13833]

// Module 13854
import _mod13833 from "module_13833" /* 13833 */;

const tmp = _mod13833.navigator && _mod13833.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
