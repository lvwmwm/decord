// Module ID: 14318
// Function ID: 14319
// Dependencies: [14297]

// Module 14318
import _mod14297 from "module_14297" /* 14297 */;

const tmp = _mod14297.navigator && _mod14297.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
