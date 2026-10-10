// Module ID: 16200
// Function ID: 16201
// Name: baseIndexOf
// Dependencies: [16201, 5128, 16202]

// Module 16200 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5128 */;
import strictIndexOf from "strictIndexOf" /* 16201 */;
import baseIsNaN from "baseIsNaN" /* 16202 */;


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
