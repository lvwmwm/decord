// Module ID: 17360
// Function ID: 17361
// Name: baseIndexOf
// Dependencies: [17361, 5579, 17362]

// Module 17360 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5579 */;
import strictIndexOf from "strictIndexOf" /* 17361 */;
import baseIsNaN from "baseIsNaN" /* 17362 */;


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
