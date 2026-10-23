// Module ID: 15541
// Function ID: 15542
// Dependencies: [15520]

// Module 15541
import _mod15520 from "module_15520" /* 15520 */;

const tmp = _mod15520.navigator && _mod15520.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
