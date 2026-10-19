// Module ID: 15345
// Function ID: 15346
// Dependencies: [15324]

// Module 15345
import _mod15324 from "module_15324" /* 15324 */;

const tmp = _mod15324.navigator && _mod15324.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
