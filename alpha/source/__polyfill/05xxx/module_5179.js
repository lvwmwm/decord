// Module ID: 5179
// Function ID: 5180
// Dependencies: [539, 540, 5180]

// Module 5179
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsMap from "baseIsMap" /* 5180 */;

let _module;
const tmp = _mod539 && _mod539.isMap;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
