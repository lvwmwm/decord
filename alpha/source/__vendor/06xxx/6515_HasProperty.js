// Module ID: 6515
// Function ID: 6516
// Name: HasProperty
// Dependencies: [6456, 1294, 6503]

// Module 6515 (HasProperty)
import _mod1294 from "module_1294" /* 1294 */;
import isObject from "isObject" /* 6456 */;
import isPropertyKey from "isPropertyKey" /* 6503 */;


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
