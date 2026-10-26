// Module ID: 15565
// Function ID: 15566
// Dependencies: [15544]

// Module 15565
import _mod15544 from "module_15544" /* 15544 */;

const tmp = _mod15544.navigator && _mod15544.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
