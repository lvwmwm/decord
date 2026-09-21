// Module ID: 14593
// Function ID: 14594
// Dependencies: [14594, 14605, 14607, 14610, 14613, 14614]

// Module 14593
import withoutSetter from "withoutSetter" /* 14594 */;
import _mod14605 from "module_14605" /* 14605 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14605(arg0)) {
    if (!tmp(14607)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14610)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14613)(tmp4, arg0, str);
        if (tmp(14605)(tmp5)) {
          if (!tmp(14607)(tmp5)) {
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
        return tmp(14614)(arg0, str2);
      }
    }
  }
  return arg0;
};
