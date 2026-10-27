// Module ID: 17256
// Function ID: 17257
// Name: baseIndexOf
// Dependencies: [17257, 5730, 17258]

// Module 17256 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5730 */;
import strictIndexOf from "strictIndexOf" /* 17257 */;
import baseIsNaN from "baseIsNaN" /* 17258 */;


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
