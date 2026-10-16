// Module ID: 5928
// Function ID: 5929
// Name: HasProperty
// Dependencies: [5869, 1308, 5916]

// Module 5928 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 5869 */;
import isPropertyKey from "isPropertyKey" /* 5916 */;


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
