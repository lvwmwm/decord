// Module ID: 5164
// Function ID: 5165
// Name: IsAccessorDescriptor
// Dependencies: [5151, 1294, 1326]

// Module 5164 (IsAccessorDescriptor)
import _mod1294 from "module_1294" /* 1294 */;
import bind from "bind" /* 1326 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5151 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Get]]");
    bind(arg0, "[[Get]]");
    if (tmp6) {
      tmp6 = !tmp(1326)(arg0, "[[Set]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
