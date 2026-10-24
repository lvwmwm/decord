// Module ID: 15561
// Function ID: 15562
// Dependencies: [15540]

// Module 15561
import _mod15540 from "module_15540" /* 15540 */;

const tmp = _mod15540.navigator && _mod15540.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
