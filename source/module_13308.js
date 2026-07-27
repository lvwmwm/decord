// Module ID: 13308
// Function ID: 102142
// Dependencies: [13309, 13320, 13322, 13325, 13328, 13329]

// Module 13308
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  let str = arg1;
  if (require(13320) /* all */(arg0)) {
    if (!require(13322)(arg0)) {
      const tmp6 = require(13325)(arg0, closure_3);
      if (tmp6) {
        if (undefined === str) {
          str = "default";
        }
        const tmp11 = require(13328) /* call */(tmp6, arg0, str);
        if (require(13320) /* all */(tmp11)) {
          if (!require(13322)(tmp11)) {
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
        return require(13329)(arg0, str2);
      }
    }
  }
  return arg0;
};
