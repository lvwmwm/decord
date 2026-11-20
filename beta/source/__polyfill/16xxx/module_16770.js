// Module ID: 16770
// Function ID: 16771
// Dependencies: [16749]

// Module 16770
import _mod16749 from "module_16749" /* 16749 */;

const tmp = _mod16749.navigator && _mod16749.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
