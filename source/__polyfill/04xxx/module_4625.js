// Module ID: 4625
// Function ID: 4626
// Dependencies: [621, 622, 4626]

// Module 4625
import _process from "_process" /* 621 */;
import baseUnary from "baseUnary" /* 622 */;
import baseIsMap from "baseIsMap" /* 4626 */;

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
