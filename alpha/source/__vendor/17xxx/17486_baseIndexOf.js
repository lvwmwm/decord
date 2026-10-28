// Module ID: 17486
// Function ID: 17487
// Name: baseIndexOf
// Dependencies: [17487, 5765, 17488]

// Module 17486 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5765 */;
import strictIndexOf from "strictIndexOf" /* 17487 */;
import baseIsNaN from "baseIsNaN" /* 17488 */;


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
