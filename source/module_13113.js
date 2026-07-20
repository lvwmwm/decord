// Module ID: 13113
// Function ID: 99449
// Dependencies: []

// Module 13113
let closure_3 = require(dependencyMap[0])("toPrimitive");

export default (arg0, arg1) => {
  let str = arg1;
  if (require(dependencyMap[1])(arg0)) {
    if (!require(dependencyMap[2])(arg0)) {
      const tmp6 = require(dependencyMap[3])(arg0, closure_3);
      if (tmp6) {
        if (undefined === str) {
          str = "default";
        }
        const tmp11 = require(dependencyMap[4])(tmp6, arg0, str);
        if (require(dependencyMap[1])(tmp11)) {
          if (!require(dependencyMap[2])(tmp11)) {
            const prototype = TypeError.prototype;
            const tmp17 = new TypeError("Can't convert object to primitive value");
            throw tmp17;
          }
        }
        return tmp11;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return require(dependencyMap[5])(arg0, str2);
      }
    }
  }
  return arg0;
};
