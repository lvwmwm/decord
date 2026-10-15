// Module ID: 5926
// Function ID: 5927
// Name: HasProperty
// Dependencies: [5867, 1306, 5914]

// Module 5926 (HasProperty)
import _mod1306 from "module_1306" /* 1306 */;
import isObject from "isObject" /* 5867 */;
import isPropertyKey from "isPropertyKey" /* 5914 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1306("Assertion failed: `P` must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1306("Assertion failed: `O` must be an Object");
    throw tmp3;
  }
};
