// Module ID: 15272
// Function ID: 15273
// Dependencies: [15273]

// Module 15272
import _mod15273 from "module_15273" /* 15273 */;


export default function(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (arg0 instanceof _mod15273) {
    return arg0;
  } else {
    try {
      const self = this;
      const self2 = this;
      const tmp5 = new _mod15273(arg0, arg1);
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
