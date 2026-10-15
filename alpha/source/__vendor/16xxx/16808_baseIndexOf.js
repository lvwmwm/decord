// Module ID: 16808
// Function ID: 16809
// Name: baseIndexOf
// Dependencies: [16809, 5187, 16810]

// Module 16808 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5187 */;
import strictIndexOf from "strictIndexOf" /* 16809 */;
import baseIsNaN from "baseIsNaN" /* 16810 */;


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
