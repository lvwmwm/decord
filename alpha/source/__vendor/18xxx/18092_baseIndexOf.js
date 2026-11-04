// Module ID: 18092
// Function ID: 18093
// Name: baseIndexOf
// Dependencies: [18093, 5913, 18094]

// Module 18092 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5913 */;
import strictIndexOf from "strictIndexOf" /* 18093 */;
import baseIsNaN from "baseIsNaN" /* 18094 */;


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
