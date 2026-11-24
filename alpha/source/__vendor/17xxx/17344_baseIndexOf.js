// Module ID: 17344
// Function ID: 17345
// Name: baseIndexOf
// Dependencies: [17345, 5708, 17346]

// Module 17344 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5708 */;
import strictIndexOf from "strictIndexOf" /* 17345 */;
import baseIsNaN from "baseIsNaN" /* 17346 */;


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
