// Module ID: 14685
// Function ID: 14686
// Dependencies: [14686, 14697, 14699, 14702, 14705, 14706]

// Module 14685
import withoutSetter from "withoutSetter" /* 14686 */;
import _mod14697 from "module_14697" /* 14697 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14697(arg0)) {
    if (!tmp(14699)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14702)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14705)(tmp4, arg0, str);
        if (tmp(14697)(tmp5)) {
          if (!tmp(14699)(tmp5)) {
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
        return tmp(14706)(arg0, str2);
      }
    }
  }
  return arg0;
};
