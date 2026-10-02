// Module ID: 4933
// Function ID: 4934
// Dependencies: [539, 540, 4934]

// Module 4933
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsSet from "baseIsSet" /* 4934 */;

let _module;
const tmp = _mod539 && _mod539.isSet;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
