// Module ID: 18386
// Function ID: 18387
// Name: baseIndexOf
// Dependencies: [18387, 6023, 18388]

// Module 18386 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 6023 */;
import strictIndexOf from "strictIndexOf" /* 18387 */;
import baseIsNaN from "baseIsNaN" /* 18388 */;


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
