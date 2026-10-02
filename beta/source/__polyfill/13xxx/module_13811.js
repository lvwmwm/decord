// Module ID: 13811
// Function ID: 13812
// Dependencies: [13790]

// Module 13811
import _mod13790 from "module_13790" /* 13790 */;

const tmp = _mod13790.navigator && _mod13790.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
