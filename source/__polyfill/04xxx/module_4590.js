// Module ID: 4590
// Function ID: 4591
// Dependencies: [624, 625, 4591]

// Module 4590
import _process from "_process" /* 624 */;
import baseUnary from "baseUnary" /* 625 */;
import baseIsMap from "baseIsMap" /* 4591 */;

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
