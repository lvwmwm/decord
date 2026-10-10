// Module ID: 5710
// Function ID: 5711
// Name: HasProperty
// Dependencies: [5651, 1306, 5698]

// Module 5710 (HasProperty)
import _mod1306 from "module_1306" /* 1306 */;
import isObject from "isObject" /* 5651 */;
import isPropertyKey from "isPropertyKey" /* 5698 */;


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
