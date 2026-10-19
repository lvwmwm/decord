// Module ID: 16919
// Function ID: 16920
// Name: baseIndexOf
// Dependencies: [16920, 5227, 16921]

// Module 16919 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5227 */;
import strictIndexOf from "strictIndexOf" /* 16920 */;
import baseIsNaN from "baseIsNaN" /* 16921 */;


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
