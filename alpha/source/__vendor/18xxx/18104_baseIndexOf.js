// Module ID: 18104
// Function ID: 18105
// Name: baseIndexOf
// Dependencies: [18105, 5913, 18106]

// Module 18104 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5913 */;
import strictIndexOf from "strictIndexOf" /* 18105 */;
import baseIsNaN from "baseIsNaN" /* 18106 */;


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
