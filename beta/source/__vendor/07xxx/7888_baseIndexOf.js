// Module ID: 7888
// Function ID: 7889
// Name: baseIndexOf
// Dependencies: [7889, 4826, 7890]

// Module 7888 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4826 */;
import strictIndexOf from "strictIndexOf" /* 7889 */;
import baseIsNaN from "baseIsNaN" /* 7890 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
