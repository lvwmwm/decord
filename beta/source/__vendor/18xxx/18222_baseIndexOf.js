// Module ID: 18222
// Function ID: 18223
// Name: baseIndexOf
// Dependencies: [18223, 5940, 18224]

// Module 18222 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5940 */;
import strictIndexOf from "strictIndexOf" /* 18223 */;
import baseIsNaN from "baseIsNaN" /* 18224 */;


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
