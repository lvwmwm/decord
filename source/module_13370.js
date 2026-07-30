// Module ID: 13370
// Function ID: 13371
// Dependencies: [13371, 13382, 13384, 13387, 13390, 13391]

// Module 13370
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  if (require(13382) /* all */(arg0)) {
    if (!tmp(13384)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13387)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13390)(tmp4, arg0, str);
        if (tmp(13382)(tmp5)) {
          if (!tmp(13384)(tmp5)) {
            const tmp9 = new TypeError("Can't convert object to primitive value");
            throw tmp9;
          }
        }
        return tmp5;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return tmp(13391)(arg0, str2);
      }
    }
  }
  return arg0;
};
