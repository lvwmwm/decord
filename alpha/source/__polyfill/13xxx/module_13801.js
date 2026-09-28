// Module ID: 13801
// Function ID: 13802
// Dependencies: [13802, 13813, 13815, 13818, 13821, 13822]

// Module 13801
import withoutSetter from "withoutSetter" /* 13802 */;
import _mod13813 from "module_13813" /* 13813 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13813(arg0)) {
    if (!tmp(13815)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13818)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13821)(tmp4, arg0, str);
        if (tmp(13813)(tmp5)) {
          if (!tmp(13815)(tmp5)) {
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
        return tmp(13822)(arg0, str2);
      }
    }
  }
  return arg0;
};
