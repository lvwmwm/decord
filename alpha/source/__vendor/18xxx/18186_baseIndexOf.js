// Module ID: 18186
// Function ID: 18187
// Name: baseIndexOf
// Dependencies: [18187, 5908, 18188]

// Module 18186 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5908 */;
import strictIndexOf from "strictIndexOf" /* 18187 */;
import baseIsNaN from "baseIsNaN" /* 18188 */;


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
