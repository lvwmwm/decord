// Module ID: 18504
// Function ID: 18505
// Name: baseIndexOf
// Dependencies: [18505, 6086, 18506]

// Module 18504 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 6086 */;
import strictIndexOf from "strictIndexOf" /* 18505 */;
import baseIsNaN from "baseIsNaN" /* 18506 */;


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
