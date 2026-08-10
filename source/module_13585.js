// Module ID: 13585
// Function ID: 13586
// Dependencies: [13586, 13597, 13599, 13602, 13605, 13606]

// Module 13585
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  if (require(13597) /* all */(arg0)) {
    if (!tmp(13599)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13602)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13605)(tmp4, arg0, str);
        if (tmp(13597)(tmp5)) {
          if (!tmp(13599)(tmp5)) {
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
        return tmp(13606)(arg0, str2);
      }
    }
  }
  return arg0;
};
