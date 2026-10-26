// Module ID: 17214
// Function ID: 17215
// Name: baseIndexOf
// Dependencies: [17215, 5729, 17216]

// Module 17214 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5729 */;
import strictIndexOf from "strictIndexOf" /* 17215 */;
import baseIsNaN from "baseIsNaN" /* 17216 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  let tmp3Result;
  if (arg1 == arg1) {
    tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    const tmp3 = baseFindIndex;
    tmp3Result = tmp3(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
