// Module ID: 14631
// Function ID: 14632
// Dependencies: [14632, 14643, 14645, 14648, 14651, 14652]

// Module 14631
import withoutSetter from "withoutSetter" /* 14632 */;
import _mod14643 from "module_14643" /* 14643 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14643(arg0)) {
    if (!tmp(14645)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14648)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14651)(tmp4, arg0, str);
        if (tmp(14643)(tmp5)) {
          if (!tmp(14645)(tmp5)) {
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
        return tmp(14652)(arg0, str2);
      }
    }
  }
  return arg0;
};
