// Module ID: 15567
// Function ID: 15568
// Dependencies: [15546]

// Module 15567
import _mod15546 from "module_15546" /* 15546 */;

const tmp = _mod15546.navigator && _mod15546.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
