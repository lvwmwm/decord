// Module ID: 4928
// Function ID: 4929
// Name: createFind
// Dependencies: [518, 595, 531]

// Module 4928 (createFind)
import isArrayLike from "isArrayLike" /* 518 */;
import baseIteratee from "baseIteratee" /* 595 */;


export default function createFind(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1, arg2) => {
    let tmp4;
    const ObjectResult = Object(arg0);
    let fn = arg1;
    let tmp5 = arg0;
    if (!isArrayLike(arg0)) {
      const tmp6 = baseIteratee(arg1, 3);
      let closure_1 = tmp6;
      tmp5 = tmp2(531)(arg0);
      fn = function u(arg0) {
        return closure_1(ObjectResult[arg0], arg0, ObjectResult);
      };
      tmp4 = tmp6;
    }
    const tmp7 = closure_0(tmp5, fn, arg2);
    let tmp8;
    if (tmp7 > -1) {
      let tmp9 = tmp7;
      if (tmp4) {
        tmp9 = tmp5[tmp7];
      }
      tmp8 = ObjectResult[tmp9];
    }
    return tmp8;
  };
};
