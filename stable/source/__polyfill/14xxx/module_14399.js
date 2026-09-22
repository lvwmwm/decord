// Module ID: 14399
// Function ID: 14400
// Dependencies: [14400, 14411, 14413, 14416, 14419, 14420]

// Module 14399
import withoutSetter from "withoutSetter" /* 14400 */;
import _mod14411 from "module_14411" /* 14411 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14411(arg0)) {
    if (!tmp(14413)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14416)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14419)(tmp4, arg0, str);
        if (tmp(14411)(tmp5)) {
          if (!tmp(14413)(tmp5)) {
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
        return tmp(14420)(arg0, str2);
      }
    }
  }
  return arg0;
};
