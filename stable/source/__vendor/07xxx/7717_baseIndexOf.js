// Module ID: 7717
// Function ID: 7718
// Name: baseIndexOf
// Dependencies: [7718, 4672, 7719]

// Module 7717 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4672 */;
import strictIndexOf from "strictIndexOf" /* 7718 */;
import baseIsNaN from "baseIsNaN" /* 7719 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
