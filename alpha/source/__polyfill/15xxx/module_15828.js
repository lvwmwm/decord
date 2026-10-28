// Module ID: 15828
// Function ID: 15829
// Dependencies: [15807]

// Module 15828
import _mod15807 from "module_15807" /* 15807 */;

const tmp = _mod15807.navigator && _mod15807.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
