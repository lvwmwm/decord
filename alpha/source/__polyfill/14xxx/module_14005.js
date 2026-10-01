// Module ID: 14005
// Function ID: 14006
// Dependencies: [14006, 14017, 14019, 14022, 14025, 14026]

// Module 14005
import withoutSetter from "withoutSetter" /* 14006 */;
import _mod14017 from "module_14017" /* 14017 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14017(arg0)) {
    if (!tmp(14019)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14022)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14025)(tmp4, arg0, str);
        if (tmp(14017)(tmp5)) {
          if (!tmp(14019)(tmp5)) {
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
        return tmp(14026)(arg0, str2);
      }
    }
  }
  return arg0;
};
