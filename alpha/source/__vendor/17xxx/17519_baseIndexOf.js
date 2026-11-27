// Module ID: 17519
// Function ID: 17520
// Name: baseIndexOf
// Dependencies: [17520, 5834, 17521]

// Module 17519 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5834 */;
import strictIndexOf from "strictIndexOf" /* 17520 */;
import baseIsNaN from "baseIsNaN" /* 17521 */;


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
