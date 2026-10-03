// Module ID: 4987
// Function ID: 4988
// Dependencies: [539, 540, 4988]

// Module 4987
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsSet from "baseIsSet" /* 4988 */;

let _module;
const tmp = _mod539 && _mod539.isSet;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
