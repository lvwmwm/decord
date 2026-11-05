// Module ID: 18132
// Function ID: 18133
// Name: baseIndexOf
// Dependencies: [18133, 5916, 18134]

// Module 18132 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5916 */;
import strictIndexOf from "strictIndexOf" /* 18133 */;
import baseIsNaN from "baseIsNaN" /* 18134 */;


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
