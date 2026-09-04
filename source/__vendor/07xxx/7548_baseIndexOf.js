// Module ID: 7548
// Function ID: 7549
// Name: baseIndexOf
// Dependencies: [7549, 4568, 7550]

// Module 7548 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4568 */;
import strictIndexOf from "strictIndexOf" /* 7549 */;
import baseIsNaN from "baseIsNaN" /* 7550 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};
