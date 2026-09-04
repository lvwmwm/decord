// Module ID: 4623
// Function ID: 4624
// Dependencies: [621, 622, 4624]

// Module 4623
import _process from "_process" /* 621 */;
import baseUnary from "baseUnary" /* 622 */;
import baseIsSet from "baseIsSet" /* 4624 */;

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
