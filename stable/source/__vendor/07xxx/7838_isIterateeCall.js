// Module ID: 7838
// Function ID: 7839
// Name: isIterateeCall
// Dependencies: [521, 518, 543, 628]

// Module 7838 (isIterateeCall)
import isArrayLike from "isArrayLike" /* 518 */;
import isObject from "isObject" /* 521 */;
import isIndex from "isIndex" /* 543 */;


export default function isIterateeCall(arg0, num, arg2) {
  if (isObject(arg2)) {
    let tmp5;
    if (typeof num === "number") {
      tmp5 = isArrayLike(arg2) && isIndex(num, arg2.length);
      isArrayLike(arg2) && isIndex(num, arg2.length);
    } else {
      tmp5 = typeof num === "string";
      if (typeof num === "string") {
        tmp5 = num in arg2;
      }
    }
    const tmp6 = tmp5 && tmp(628)(arg2[num], arg0);
    return tmp6;
  } else {
    return false;
  }
};
