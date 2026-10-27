// Module ID: 15566
// Function ID: 15567
// Dependencies: [15545]

// Module 15566
import _mod15545 from "module_15545" /* 15545 */;

const tmp = _mod15545.navigator && _mod15545.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
