// Module ID: 5089
// Function ID: 5090
// Dependencies: [1318, 1286]

// Module 5089
import _mod1318 from "module_1318" /* 1318 */;

let closure_2 = Object.assign({ "[[Configurable]]": true, "[[Enumerable]]": true, "[[Get]]": true, "[[Set]]": true, "[[Value]]": true, "[[Writable]]": true });

export default function isPropertyDescriptor(obj) {
  if (obj) {
    if (typeof obj === "object") {
      for (const key10001 in arg0) {
        if (!_mod1318(arg0, key10001)) {
          continue;
        } else if (closure_2[key10001]) {
          continue;
        } else {
          let flag = false;
          return false;
        }
        continue;
      }
      let tmp4 = _mod1318(obj, "[[Value]]");
      if (!tmp4) {
        tmp4 = tmp2(1318)(obj, "[[Writable]]");
      }
      let tmp5 = tmp2(1318)(obj, "[[Get]]");
      if (!tmp5) {
        tmp5 = tmp2(1318)(obj, "[[Set]]");
      }
      if (tmp4) {
        if (tmp5) {
          const tmp8 = new tmp2(1286)("Property Descriptors may not be both accessor and data descriptors");
          throw tmp8;
        }
      }
      return true;
    }
  }
  return false;
};
