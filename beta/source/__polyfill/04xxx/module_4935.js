// Module ID: 4935
// Function ID: 4936
// Dependencies: [539, 540, 4936]

// Module 4935
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsMap from "baseIsMap" /* 4936 */;

let _module;
const tmp = _mod539 && _mod539.isMap;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
