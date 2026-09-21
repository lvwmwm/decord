// Module ID: 7856
// Function ID: 7857
// Name: baseIndexOf
// Dependencies: [7857, 4794, 7858]

// Module 7856 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4794 */;
import strictIndexOf from "strictIndexOf" /* 7857 */;
import baseIsNaN from "baseIsNaN" /* 7858 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
