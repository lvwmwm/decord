// Module ID: 7033
// Function ID: 7034
// Name: baseIndexOf
// Dependencies: [7034, 4873, 7035]

// Module 7033 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4873 */;
import strictIndexOf from "strictIndexOf" /* 7034 */;
import baseIsNaN from "baseIsNaN" /* 7035 */;


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
