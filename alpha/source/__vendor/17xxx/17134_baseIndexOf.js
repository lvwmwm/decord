// Module ID: 17134
// Function ID: 17135
// Name: baseIndexOf
// Dependencies: [17135, 5715, 17136]

// Module 17134 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5715 */;
import strictIndexOf from "strictIndexOf" /* 17135 */;
import baseIsNaN from "baseIsNaN" /* 17136 */;


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
