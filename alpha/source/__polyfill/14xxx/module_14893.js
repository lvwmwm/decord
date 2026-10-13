// Module ID: 14893
// Function ID: 14894
// Dependencies: [14872]

// Module 14893
import _mod14872 from "module_14872" /* 14872 */;

const tmp = _mod14872.navigator && _mod14872.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
