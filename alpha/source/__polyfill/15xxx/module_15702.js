// Module ID: 15702
// Function ID: 15703
// Dependencies: [15681]

// Module 15702
import _mod15681 from "module_15681" /* 15681 */;

const tmp = _mod15681.navigator && _mod15681.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
