// Module ID: 16491
// Function ID: 16492
// Dependencies: [16470]

// Module 16491
import _mod16470 from "module_16470" /* 16470 */;

const tmp = _mod16470.navigator && _mod16470.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
