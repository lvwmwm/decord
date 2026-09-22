// Module ID: 4855
// Function ID: 4856
// Dependencies: [539, 540, 4856]

// Module 4855
import _process from "_process" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsMap from "baseIsMap" /* 4856 */;

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
