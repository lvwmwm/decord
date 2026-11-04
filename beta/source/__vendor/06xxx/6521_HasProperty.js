// Module ID: 6521
// Function ID: 6522
// Name: HasProperty
// Dependencies: [6462, 1293, 6509]

// Module 6521 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 6462 */;
import isPropertyKey from "isPropertyKey" /* 6509 */;


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
