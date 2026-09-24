// Module ID: 7939
// Function ID: 7940
// Name: baseIndexOf
// Dependencies: [7940, 4865, 7941]

// Module 7939 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4865 */;
import strictIndexOf from "strictIndexOf" /* 7940 */;
import baseIsNaN from "baseIsNaN" /* 7941 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
