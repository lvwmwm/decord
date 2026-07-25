// Module ID: 13307
// Function ID: 102137
// Dependencies: [13308, 13319, 13321, 13324, 13327, 13328]

// Module 13307
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  let str = arg1;
  if (require(13319) /* all */(arg0)) {
    if (!require(13321)(arg0)) {
      const tmp6 = require(13324)(arg0, closure_3);
      if (tmp6) {
        if (undefined === str) {
          str = "default";
        }
        const tmp11 = require(13327) /* call */(tmp6, arg0, str);
        if (require(13319) /* all */(tmp11)) {
          if (!require(13321)(tmp11)) {
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
        return require(13328)(arg0, str2);
      }
    }
  }
  return arg0;
};
