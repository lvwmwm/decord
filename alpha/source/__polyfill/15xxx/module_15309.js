// Module ID: 15309
// Function ID: 15310
// Dependencies: [15310]

// Module 15309
import _mod15310 from "module_15310" /* 15310 */;


export default function(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (arg0 instanceof _mod15310) {
    return arg0;
  } else {
    try {
      const self = this;
      const self2 = this;
      const tmp5 = new _mod15310(arg0, arg1);
      return tmp5;
    } catch (tmp7) {
      if (flag) {
        throw tmp7;
      } else {
        return null;
      }
    }
  }
};
