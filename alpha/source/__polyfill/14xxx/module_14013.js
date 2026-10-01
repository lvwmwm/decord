// Module ID: 14013
// Function ID: 14014
// Dependencies: [13992]

// Module 14013
import _mod13992 from "module_13992" /* 13992 */;

const tmp = _mod13992.navigator && _mod13992.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
