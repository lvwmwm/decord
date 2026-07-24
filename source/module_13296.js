// Module ID: 13296
// Function ID: 102010
// Dependencies: [13297, 13308, 13310, 13313, 13316, 13317]

// Module 13296
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  let str = arg1;
  if (require(13308) /* all */(arg0)) {
    if (!require(13310)(arg0)) {
      const tmp6 = require(13313)(arg0, closure_3);
      if (tmp6) {
        if (undefined === str) {
          str = "default";
        }
        const tmp11 = require(13316) /* call */(tmp6, arg0, str);
        if (require(13308) /* all */(tmp11)) {
          if (!require(13310)(tmp11)) {
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
        return require(13317)(arg0, str2);
      }
    }
  }
  return arg0;
};
