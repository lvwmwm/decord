// Module ID: 6434
// Function ID: 6435
// Name: HasProperty
// Dependencies: [6375, 1308, 6422]

// Module 6434 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 6375 */;
import isPropertyKey from "isPropertyKey" /* 6422 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1308("Assertion failed: `P` must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("Assertion failed: `O` must be an Object");
    throw tmp3;
  }
};
