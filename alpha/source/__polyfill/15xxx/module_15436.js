// Module ID: 15436
// Function ID: 15437
// Dependencies: [15415]

// Module 15436
import _mod15415 from "module_15415" /* 15415 */;

const tmp = _mod15415.navigator && _mod15415.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
