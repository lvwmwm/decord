// Module ID: 16144
// Function ID: 16145
// Dependencies: [16123]

// Module 16144
import _mod16123 from "module_16123" /* 16123 */;

const tmp = _mod16123.navigator && _mod16123.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
