// Module ID: 14980
// Function ID: 14981
// Dependencies: [14981]

// Module 14980
import _mod14981 from "module_14981" /* 14981 */;


export default function(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (arg0 instanceof _mod14981) {
    return arg0;
  } else {
    try {
      const self = this;
      const self2 = this;
      const tmp5 = new _mod14981(arg0, arg1);
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
