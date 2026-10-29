// Module ID: 6508
// Function ID: 6509
// Name: HasProperty
// Dependencies: [6449, 1305, 6496]

// Module 6508 (HasProperty)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6449 */;
import isPropertyKey from "isPropertyKey" /* 6496 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1305("Assertion failed: `P` must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1305("Assertion failed: `O` must be an Object");
    throw tmp3;
  }
};
