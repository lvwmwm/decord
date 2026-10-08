// Module ID: 14151
// Function ID: 14152
// Dependencies: [14152]

// Module 14151
import _mod14152 from "module_14152" /* 14152 */;


export default function(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (arg0 instanceof _mod14152) {
    return arg0;
  } else {
    try {
      const self = this;
      const self2 = this;
      const tmp5 = new _mod14152(arg0, arg1);
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
