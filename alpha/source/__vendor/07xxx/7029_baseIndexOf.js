// Module ID: 7029
// Function ID: 7030
// Name: baseIndexOf
// Dependencies: [7030, 4872, 7031]

// Module 7029 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4872 */;
import strictIndexOf from "strictIndexOf" /* 7030 */;
import baseIsNaN from "baseIsNaN" /* 7031 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
