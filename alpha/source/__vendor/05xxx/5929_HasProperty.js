// Module ID: 5929
// Function ID: 5930
// Name: HasProperty
// Dependencies: [5870, 1308, 5917]

// Module 5929 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 5870 */;
import isPropertyKey from "isPropertyKey" /* 5917 */;


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
