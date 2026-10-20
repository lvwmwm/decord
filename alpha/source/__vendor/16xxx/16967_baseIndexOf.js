// Module ID: 16967
// Function ID: 16968
// Name: baseIndexOf
// Dependencies: [16968, 5691, 16969]

// Module 16967 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5691 */;
import strictIndexOf from "strictIndexOf" /* 16968 */;
import baseIsNaN from "baseIsNaN" /* 16969 */;


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
