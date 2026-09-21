// Module ID: 7851
// Function ID: 7852
// Name: baseIndexOf
// Dependencies: [7852, 4792, 7853]

// Module 7851 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4792 */;
import strictIndexOf from "strictIndexOf" /* 7852 */;
import baseIsNaN from "baseIsNaN" /* 7853 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
