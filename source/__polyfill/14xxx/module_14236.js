// Module ID: 14236
// Function ID: 14237
// Dependencies: [14237, 14248, 14250, 14253, 14256, 14257]

// Module 14236
import withoutSetter from "withoutSetter" /* 14237 */;
import all from "all" /* 14248 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(14250)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14253)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14256)(tmp4, arg0, str);
        if (tmp(14248)(tmp5)) {
          if (!tmp(14250)(tmp5)) {
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
        return tmp(14257)(arg0, str2);
      }
    }
  }
  return arg0;
};
