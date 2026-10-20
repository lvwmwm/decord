// Module ID: 16228
// Function ID: 16229
// Name: baseIndexOf
// Dependencies: [16229, 5128, 16230]

// Module 16228 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5128 */;
import strictIndexOf from "strictIndexOf" /* 16229 */;
import baseIsNaN from "baseIsNaN" /* 16230 */;


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
