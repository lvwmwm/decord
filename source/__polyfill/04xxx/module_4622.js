// Module ID: 4622
// Function ID: 4623
// Dependencies: [621, 622, 4623]

// Module 4622
import _process from "_process" /* 621 */;
import baseUnary from "baseUnary" /* 622 */;
import baseIsMap from "baseIsMap" /* 4623 */;

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
