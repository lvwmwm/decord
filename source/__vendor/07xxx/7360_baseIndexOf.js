// Module ID: 7360
// Function ID: 7361
// Name: baseIndexOf
// Dependencies: [7361, 4565, 7362]

// Module 7360 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4565 */;
import strictIndexOf from "strictIndexOf" /* 7361 */;
import baseIsNaN from "baseIsNaN" /* 7362 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};
