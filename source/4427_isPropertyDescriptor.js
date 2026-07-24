// Module ID: 4427
// Function ID: 38910
// Name: isPropertyDescriptor
// Dependencies: [550, 518]

// Module 4427 (isPropertyDescriptor)
const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Get]]": true, "[[Set]]": true, "[[Value]]": true, "[[Writable]]": true };
Object.setPrototypeOf(null);

export default function isPropertyDescriptor(obj) {
  if (obj) {
    if ("object" === typeof obj) {
      for (const key10003 in arg0) {
        let tmp20 = key10003;
        let tmp21 = require;
        let tmp22 = dependencyMap;
        if (!require(550) /* bind */(arg0, key10003)) {
          continue;
        } else {
          let tmp = obj;
          if (obj[key10003]) {
            continue;
          } else {
            let flag = false;
            return false;
          }
        }
        continue;
      }
      let tmp4 = require(550) /* bind */(obj, "[[Value]]");
      if (!tmp4) {
        tmp4 = require(550) /* bind */(obj, "[[Writable]]");
      }
      let tmp9 = require(550) /* bind */(obj, "[[Get]]");
      if (!tmp9) {
        tmp9 = require(550) /* bind */(obj, "[[Set]]");
      }
      if (tmp4) {
        if (tmp9) {
          let tmp14 = require(518);
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
