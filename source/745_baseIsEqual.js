// Module ID: 745
// Function ID: 8795
// Name: baseIsEqual
// Dependencies: [577, 746]

// Module 745 (baseIsEqual)
function baseIsEqual(arg0, arg1, arg2, arg3, arg4) {
  let tmp = arg0;
  if (arg0 === arg1) {
    return tmp2;
  } else {
    if (null != tmp) {
      if (null != arg1) {
        if (require(577) /* isObjectLike */(tmp)) {
          let tmp16 = require(746) /* baseIsEqualDeep */(tmp, arg1, arg2, arg3, baseIsEqual, arg4);
        }
      }
    }
    tmp = tmp != tmp && arg1 != arg1;
    tmp16 = tmp;
  }
}

export default baseIsEqual;
