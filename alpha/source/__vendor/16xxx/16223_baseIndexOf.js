// Module ID: 16223
// Function ID: 16224
// Name: baseIndexOf
// Dependencies: [16224, 5128, 16225]

// Module 16223 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5128 */;
import strictIndexOf from "strictIndexOf" /* 16224 */;
import baseIsNaN from "baseIsNaN" /* 16225 */;


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
