// Module ID: 4620
// Function ID: 4621
// Dependencies: [624, 625, 4621]

// Module 4620
import _process from "_process" /* 624 */;
import baseUnary from "baseUnary" /* 625 */;
import baseIsSet from "baseIsSet" /* 4621 */;

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
