// Module ID: 5238
// Function ID: 5239
// Dependencies: [539, 540, 5239]

// Module 5238
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsSet from "baseIsSet" /* 5239 */;

let _module;
const tmp = _mod539 && _mod539.isSet;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
