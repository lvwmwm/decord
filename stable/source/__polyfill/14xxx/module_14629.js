// Module ID: 14629
// Function ID: 14630
// Dependencies: [14608]

// Module 14629
import _mod14608 from "module_14608" /* 14608 */;

const tmp = _mod14608.navigator && _mod14608.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
