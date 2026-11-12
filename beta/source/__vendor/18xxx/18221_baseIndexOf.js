// Module ID: 18221
// Function ID: 18222
// Name: baseIndexOf
// Dependencies: [18222, 5940, 18223]

// Module 18221 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5940 */;
import strictIndexOf from "strictIndexOf" /* 18222 */;
import baseIsNaN from "baseIsNaN" /* 18223 */;


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
