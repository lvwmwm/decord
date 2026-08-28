// Module ID: 4588
// Function ID: 4589
// Dependencies: [624, 625, 4589]

// Module 4588
import _process from "_process" /* 624 */;
import baseUnary from "baseUnary" /* 625 */;
import baseIsMap from "baseIsMap" /* 4589 */;

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
