// Module ID: 14568
// Function ID: 14569
// Dependencies: [14569, 14582, 14530, 14551]

// Module 14568
import _mod14551 from "module_14551" /* 14551 */;
import _mod14569 from "module_14569" /* 14569 */;
import defineProperty2 from "defineProperty2" /* 14582 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14569(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp3 = require;
    let tmp5 = _mod14551(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && tmp3(14551)(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
