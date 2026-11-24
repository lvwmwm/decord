// Module ID: 15580
// Function ID: 15581
// Dependencies: [15559]

// Module 15580
import _mod15559 from "module_15559" /* 15559 */;

const tmp = _mod15559.navigator && _mod15559.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
