// Module ID: 17215
// Function ID: 17216
// Name: baseIndexOf
// Dependencies: [17216, 5729, 17217]

// Module 17215 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5729 */;
import strictIndexOf from "strictIndexOf" /* 17216 */;
import baseIsNaN from "baseIsNaN" /* 17217 */;


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
