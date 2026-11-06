// Module ID: 18126
// Function ID: 18127
// Name: baseIndexOf
// Dependencies: [18127, 5935, 18128]

// Module 18126 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5935 */;
import strictIndexOf from "strictIndexOf" /* 18127 */;
import baseIsNaN from "baseIsNaN" /* 18128 */;


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
