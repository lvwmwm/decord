// Module ID: 7854
// Function ID: 7855
// Name: baseIndexOf
// Dependencies: [7855, 4793, 7856]

// Module 7854 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4793 */;
import strictIndexOf from "strictIndexOf" /* 7855 */;
import baseIsNaN from "baseIsNaN" /* 7856 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
