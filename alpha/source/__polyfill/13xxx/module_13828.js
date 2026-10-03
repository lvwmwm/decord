// Module ID: 13828
// Function ID: 13829
// Dependencies: [13829]

// Module 13828
import _mod13829 from "module_13829" /* 13829 */;


export default function(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (arg0 instanceof _mod13829) {
    return arg0;
  } else {
    try {
      const self = this;
      const self2 = this;
      const tmp5 = new _mod13829(arg0, arg1);
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
