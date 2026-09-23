// Module ID: 14676
// Function ID: 14677
// Dependencies: [14677, 14688, 14690, 14693, 14696, 14697]

// Module 14676
import withoutSetter from "withoutSetter" /* 14677 */;
import _mod14688 from "module_14688" /* 14688 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14688(arg0)) {
    if (!tmp(14690)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14693)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14696)(tmp4, arg0, str);
        if (tmp(14688)(tmp5)) {
          if (!tmp(14690)(tmp5)) {
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
        return tmp(14697)(arg0, str2);
      }
    }
  }
  return arg0;
};
