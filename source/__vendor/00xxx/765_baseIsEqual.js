// Module ID: 765
// Function ID: 766
// Name: baseIsEqual
// Dependencies: [617, 766]

// Module 765 (baseIsEqual)
import isObjectLike from "isObjectLike" /* 617 */;

function baseIsEqual(arg0, arg1, arg2, arg3, arg4) {
  if (arg0 === arg1) {
    return tmp;
  } else {
    if (null != arg0) {
      if (null != arg1) {
        if (isObjectLike(arg0)) {
          let tmp11 = tmp3(766)(arg0, arg1, arg2, arg3, baseIsEqual, arg4);
        }
      }
    }
    tmp11 = arg0 != arg0 && arg1 != arg1;
    const tmp12 = arg0 != arg0 && arg1 != arg1;
  }
}

export default baseIsEqual;
