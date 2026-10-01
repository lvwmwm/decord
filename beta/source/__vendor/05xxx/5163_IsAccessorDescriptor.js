// Module ID: 5163
// Function ID: 5164
// Name: IsAccessorDescriptor
// Dependencies: [5150, 1282, 1314]

// Module 5163 (IsAccessorDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import bind from "bind" /* 1314 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5150 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Get]]");
    bind(arg0, "[[Get]]");
    if (tmp6) {
      tmp6 = !tmp(1314)(arg0, "[[Set]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
