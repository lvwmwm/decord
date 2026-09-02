// Module ID: 8672
// Function ID: 8673
// Name: isIterateeCall
// Dependencies: [603, 600, 625, 749]

// Module 8672 (isIterateeCall)
import isObject from "isObject" /* 603 */;


export default function isIterateeCall(arg0, num) {
  if (isObject(arg2)) {
    if (typeof num === "number") {
      let tmp5 = tmp(600)(arg2) && tmp(625)(num, arg2.length);
      const tmp4 = tmp(600)(arg2) && tmp(625)(num, arg2.length);
    } else {
      tmp5 = typeof num === "string";
      if (typeof num === "string") {
        tmp5 = num in arg2;
      }
    }
    let tmp6 = tmp5;
    if (tmp6) {
      tmp6 = tmp(749)(arg2[num], arg0);
    }
    return tmp6;
  } else {
    return false;
  }
};
