// Module ID: 18547
// Function ID: 18548
// Name: baseIndexOf
// Dependencies: [18548, 6083, 18549]

// Module 18547 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 6083 */;
import strictIndexOf from "strictIndexOf" /* 18548 */;
import baseIsNaN from "baseIsNaN" /* 18549 */;


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
