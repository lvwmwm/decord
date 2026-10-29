// Module ID: 17725
// Function ID: 17726
// Name: baseIndexOf
// Dependencies: [17726, 5767, 17727]

// Module 17725 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5767 */;
import strictIndexOf from "strictIndexOf" /* 17726 */;
import baseIsNaN from "baseIsNaN" /* 17727 */;


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
