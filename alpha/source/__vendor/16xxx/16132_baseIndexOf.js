// Module ID: 16132
// Function ID: 16133
// Name: baseIndexOf
// Dependencies: [16133, 5127, 16134]

// Module 16132 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5127 */;
import strictIndexOf from "strictIndexOf" /* 16133 */;
import baseIsNaN from "baseIsNaN" /* 16134 */;


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
