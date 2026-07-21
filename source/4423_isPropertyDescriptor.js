// Module ID: 4423
// Function ID: 38869
// Name: isPropertyDescriptor
// Dependencies: []

// Module 4423 (isPropertyDescriptor)
const obj = {};
Object.setPrototypeOf(null);

export default function isPropertyDescriptor(obj) {
  if (obj) {
    if ("object" === typeof obj) {
      for (const key10003 in arg0) {
        let tmp20 = key10003;
        let tmp21 = closure_0;
        let tmp22 = closure_1;
        if (!closure_0(closure_1[0])(arg0, key10003)) {
          continue;
        } else {
          let tmp = closure_2;
          if (closure_2[key10003]) {
            continue;
          } else {
            let flag = false;
            return false;
          }
        }
        continue;
      }
      let tmp4 = require(dependencyMap[0])(obj, "[[Value]]");
      if (!tmp4) {
        tmp4 = require(dependencyMap[0])(obj, "[[Writable]]");
      }
      let tmp9 = require(dependencyMap[0])(obj, "[[Get]]");
      if (!tmp9) {
        tmp9 = require(dependencyMap[0])(obj, "[[Set]]");
      }
      if (tmp4) {
        if (tmp9) {
          let tmp14 = require(dependencyMap[1]);
          const prototype = tmp14.prototype;
          tmp14 = new tmp14("Property Descriptors may not be both accessor and data descriptors");
          throw tmp14;
        }
      }
      return true;
    }
  }
  return false;
};
