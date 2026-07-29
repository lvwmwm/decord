// Module ID: 13375
// Function ID: 13376
// Dependencies: [13376, 13387, 13389, 13392, 13395, 13396]

// Module 13375
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  if (require(13387) /* all */(arg0)) {
    if (!tmp(13389)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13392)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13395)(tmp4, arg0, str);
        if (tmp(13387)(tmp5)) {
          if (!tmp(13389)(tmp5)) {
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
        return tmp(13396)(arg0, str2);
      }
    }
  }
  return arg0;
};
