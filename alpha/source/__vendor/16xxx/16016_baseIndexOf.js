// Module ID: 16016
// Function ID: 16017
// Name: baseIndexOf
// Dependencies: [16017, 5126, 16018]

// Module 16016 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5126 */;
import strictIndexOf from "strictIndexOf" /* 16017 */;
import baseIsNaN from "baseIsNaN" /* 16018 */;


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
