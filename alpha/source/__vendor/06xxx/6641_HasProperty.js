// Module ID: 6641
// Function ID: 6642
// Name: HasProperty
// Dependencies: [6582, 1293, 6629]

// Module 6641 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 6582 */;
import isPropertyKey from "isPropertyKey" /* 6629 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1293("Assertion failed: `P` must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: `O` must be an Object");
    throw tmp3;
  }
};
