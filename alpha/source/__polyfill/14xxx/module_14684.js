// Module ID: 14684
// Function ID: 14685
// Dependencies: [14663]

// Module 14684
import _mod14663 from "module_14663" /* 14663 */;

const tmp = _mod14663.navigator && _mod14663.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
