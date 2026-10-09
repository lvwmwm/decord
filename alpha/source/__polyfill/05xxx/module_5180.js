// Module ID: 5180
// Function ID: 5181
// Dependencies: [539, 540, 5181]

// Module 5180
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsMap from "baseIsMap" /* 5181 */;

let _module;
const tmp = _mod539 && _mod539.isMap;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
