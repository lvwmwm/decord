// Module ID: 6484
// Function ID: 6485
// Name: HasProperty
// Dependencies: [6425, 1305, 6472]

// Module 6484 (HasProperty)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6425 */;
import isPropertyKey from "isPropertyKey" /* 6472 */;


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
