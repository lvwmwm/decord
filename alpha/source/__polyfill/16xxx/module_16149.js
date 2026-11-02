// Module ID: 16149
// Function ID: 16150
// Dependencies: [16128]

// Module 16149
import _mod16128 from "module_16128" /* 16128 */;

const tmp = _mod16128.navigator && _mod16128.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
