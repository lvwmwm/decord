// Module ID: 13906
// Function ID: 13907
// Dependencies: [13885]

// Module 13906
import _mod13885 from "module_13885" /* 13885 */;

const tmp = _mod13885.navigator && _mod13885.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
