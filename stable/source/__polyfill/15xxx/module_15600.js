// Module ID: 15600
// Function ID: 15601
// Dependencies: [15579]

// Module 15600
import _mod15579 from "module_15579" /* 15579 */;

const tmp = _mod15579.navigator && _mod15579.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
