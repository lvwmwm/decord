// Module ID: 16855
// Function ID: 16856
// Name: baseIndexOf
// Dependencies: [16856, 5190, 16857]

// Module 16855 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5190 */;
import strictIndexOf from "strictIndexOf" /* 16856 */;
import baseIsNaN from "baseIsNaN" /* 16857 */;


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
