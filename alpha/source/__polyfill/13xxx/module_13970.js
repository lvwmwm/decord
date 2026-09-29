// Module ID: 13970
// Function ID: 13971
// Dependencies: [13971, 13982, 13984, 13987, 13990, 13991]

// Module 13970
import withoutSetter from "withoutSetter" /* 13971 */;
import _mod13982 from "module_13982" /* 13982 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13982(arg0)) {
    if (!tmp(13984)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13987)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13990)(tmp4, arg0, str);
        if (tmp(13982)(tmp5)) {
          if (!tmp(13984)(tmp5)) {
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
        return tmp(13991)(arg0, str2);
      }
    }
  }
  return arg0;
};
