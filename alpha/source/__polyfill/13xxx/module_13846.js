// Module ID: 13846
// Function ID: 13847
// Dependencies: [13847, 13858, 13860, 13863, 13866, 13867]

// Module 13846
import withoutSetter from "withoutSetter" /* 13847 */;
import _mod13858 from "module_13858" /* 13858 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13858(arg0)) {
    if (!tmp(13860)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13863)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13866)(tmp4, arg0, str);
        if (tmp(13858)(tmp5)) {
          if (!tmp(13860)(tmp5)) {
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
        return tmp(13867)(arg0, str2);
      }
    }
  }
  return arg0;
};
