// Module ID: 16915
// Function ID: 16916
// Name: baseIndexOf
// Dependencies: [16916, 5227, 16917]

// Module 16915 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5227 */;
import strictIndexOf from "strictIndexOf" /* 16916 */;
import baseIsNaN from "baseIsNaN" /* 16917 */;


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
