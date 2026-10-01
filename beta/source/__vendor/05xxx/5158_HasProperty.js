// Module ID: 5158
// Function ID: 5159
// Name: HasProperty
// Dependencies: [5099, 1282, 5146]

// Module 5158 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import isObject from "isObject" /* 5099 */;
import isPropertyKey from "isPropertyKey" /* 5146 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1282("Assertion failed: `P` must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("Assertion failed: `O` must be an Object");
    throw tmp3;
  }
};
