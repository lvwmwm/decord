// Module ID: 5159
// Function ID: 5160
// Name: HasProperty
// Dependencies: [5100, 1294, 5147]

// Module 5159 (HasProperty)
import _mod1294 from "module_1294" /* 1294 */;
import isObject from "isObject" /* 5100 */;
import isPropertyKey from "isPropertyKey" /* 5147 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1294("Assertion failed: `P` must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1294("Assertion failed: `O` must be an Object");
    throw tmp3;
  }
};
