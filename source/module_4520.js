// Module ID: 4520
// Function ID: 4521
// Dependencies: [624, 625, 4521]

// Module 4520
import _process from "_process" /* 624 */;
import baseUnary from "baseUnary" /* 625 */;
import baseIsSet from "baseIsSet" /* 4521 */;

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
