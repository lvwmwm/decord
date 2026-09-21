// Module ID: 14601
// Function ID: 14602
// Dependencies: [14580]

// Module 14601
import _mod14580 from "module_14580" /* 14580 */;

const tmp = _mod14580.navigator && _mod14580.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
