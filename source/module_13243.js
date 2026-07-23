// Module ID: 13243
// Function ID: 101683
// Dependencies: [13244, 13255, 13257, 13260, 13263, 13264]

// Module 13243
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  let str = arg1;
  if (require(13255) /* all */(arg0)) {
    if (!require(13257)(arg0)) {
      const tmp6 = require(13260)(arg0, closure_3);
      if (tmp6) {
        if (undefined === str) {
          str = "default";
        }
        const tmp11 = require(13263) /* call */(tmp6, arg0, str);
        if (require(13255) /* all */(tmp11)) {
          if (!require(13257)(tmp11)) {
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
        return require(13264)(arg0, str2);
      }
    }
  }
  return arg0;
};
