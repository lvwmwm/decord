// Module ID: 5178
// Function ID: 5179
// Dependencies: [539, 540, 5179]

// Module 5178
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsSet from "baseIsSet" /* 5179 */;

let _module;
const tmp = _mod539 && _mod539.isSet;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
