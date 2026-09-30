// Module ID: 13997
// Function ID: 13998
// Dependencies: [13998, 14009, 14011, 14014, 14017, 14018]

// Module 13997
import withoutSetter from "withoutSetter" /* 13998 */;
import _mod14009 from "module_14009" /* 14009 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14009(arg0)) {
    if (!tmp(14011)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14014)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14017)(tmp4, arg0, str);
        if (tmp(14009)(tmp5)) {
          if (!tmp(14011)(tmp5)) {
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
        return tmp(14018)(arg0, str2);
      }
    }
  }
  return arg0;
};
