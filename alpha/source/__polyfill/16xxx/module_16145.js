// Module ID: 16145
// Function ID: 16146
// Dependencies: [16124]

// Module 16145
import _mod16124 from "module_16124" /* 16124 */;

const tmp = _mod16124.navigator && _mod16124.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
