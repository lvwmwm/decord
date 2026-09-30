// Module ID: 7224
// Function ID: 7225
// Name: baseIndexOf
// Dependencies: [7225, 4902, 7226]

// Module 7224 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4902 */;
import strictIndexOf from "strictIndexOf" /* 7225 */;
import baseIsNaN from "baseIsNaN" /* 7226 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
