// Module ID: 5828
// Function ID: 5829
// Dependencies: [539, 540, 5829]

// Module 5828
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsMap from "baseIsMap" /* 5829 */;

let _module;
const tmp = _mod539 && _mod539.isMap;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
