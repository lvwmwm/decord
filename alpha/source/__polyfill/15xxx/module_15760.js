// Module ID: 15760
// Function ID: 15761
// Dependencies: [15739]

// Module 15760
import _mod15739 from "module_15739" /* 15739 */;

const tmp = _mod15739.navigator && _mod15739.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
