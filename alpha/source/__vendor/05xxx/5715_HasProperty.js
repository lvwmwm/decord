// Module ID: 5715
// Function ID: 5716
// Name: HasProperty
// Dependencies: [5656, 1306, 5703]

// Module 5715 (HasProperty)
import _mod1306 from "module_1306" /* 1306 */;
import isObject from "isObject" /* 5656 */;
import isPropertyKey from "isPropertyKey" /* 5703 */;


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
