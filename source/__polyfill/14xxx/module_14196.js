// Module ID: 14196
// Function ID: 14197
// Dependencies: [14175]

// Module 14196
import _mod14175 from "module_14175" /* 14175 */;

const tmp = _mod14175.navigator && _mod14175.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
