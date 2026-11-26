// Module ID: 17512
// Function ID: 17513
// Name: baseIndexOf
// Dependencies: [17513, 5834, 17514]

// Module 17512 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5834 */;
import strictIndexOf from "strictIndexOf" /* 17513 */;
import baseIsNaN from "baseIsNaN" /* 17514 */;


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
