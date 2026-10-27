// Module ID: 6450
// Function ID: 6451
// Name: HasProperty
// Dependencies: [6391, 1305, 6438]

// Module 6450 (HasProperty)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6391 */;
import isPropertyKey from "isPropertyKey" /* 6438 */;


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
