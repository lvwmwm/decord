// Module ID: 18381
// Function ID: 18382
// Name: baseIndexOf
// Dependencies: [18382, 6023, 18383]

// Module 18381 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 6023 */;
import strictIndexOf from "strictIndexOf" /* 18382 */;
import baseIsNaN from "baseIsNaN" /* 18383 */;


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
