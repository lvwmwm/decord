// Module ID: 14621
// Function ID: 14622
// Dependencies: [14622, 14633, 14635, 14638, 14641, 14642]

// Module 14621
import withoutSetter from "withoutSetter" /* 14622 */;
import _mod14633 from "module_14633" /* 14633 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14633(arg0)) {
    if (!tmp(14635)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14638)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14641)(tmp4, arg0, str);
        if (tmp(14633)(tmp5)) {
          if (!tmp(14635)(tmp5)) {
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
        return tmp(14642)(arg0, str2);
      }
    }
  }
  return arg0;
};
