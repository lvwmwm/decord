// Module ID: 7141
// Function ID: 7142
// Dependencies: [7142]

// Module 7141
import _mod7142 from "module_7142" /* 7142 */;


export default function _createClass(arg0, arg1, arg2) {
  if (arg1) {
    for (let num = 0; num < arg1.length; num = num + 1) {
      let tmp3 = arg1[num];
      let flag2 = tmp3.enumerable;
      if (!flag2) {
        flag2 = false;
      }
      tmp3.enumerable = flag2;
      tmp3.configurable = true;
      if ("value" in tmp3) {
        tmp3.writable = true;
      }
      let _Object = Object;
      let definePropertyResult = Object.defineProperty(tmp, _mod7142(tmp3.key), tmp3);
    }
  }
  if (arg2) {
    for (let num3 = 0; num3 < arg2.length; num3 = num3 + 1) {
      let tmp9 = arg2[num3];
      let flag4 = tmp9.enumerable;
      if (!flag4) {
        flag4 = false;
      }
      tmp9.enumerable = flag4;
      tmp9.configurable = true;
      if ("value" in tmp9) {
        tmp9.writable = true;
      }
      let _Object2 = Object;
      let definePropertyResult1 = Object.defineProperty(arg0, _mod7142(tmp9.key), tmp9);
    }
  }
  Object.defineProperty(arg0, "prototype", { writable: false });
  return arg0;
};
