// Module ID: 14577
// Function ID: 14578
// Dependencies: [14556]

// Module 14577
import _mod14556 from "module_14556" /* 14556 */;

const tmp = _mod14556.navigator && _mod14556.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
