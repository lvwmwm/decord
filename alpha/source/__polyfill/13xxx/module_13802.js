// Module ID: 13802
// Function ID: 13803
// Dependencies: [13803, 13814, 13816, 13819, 13822, 13823]

// Module 13802
import withoutSetter from "withoutSetter" /* 13803 */;
import _mod13814 from "module_13814" /* 13814 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13814(arg0)) {
    if (!tmp(13816)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13819)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13822)(tmp4, arg0, str);
        if (tmp(13814)(tmp5)) {
          if (!tmp(13816)(tmp5)) {
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
        return tmp(13823)(arg0, str2);
      }
    }
  }
  return arg0;
};
