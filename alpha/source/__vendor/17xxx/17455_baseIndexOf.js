// Module ID: 17455
// Function ID: 17456
// Name: baseIndexOf
// Dependencies: [17456, 5803, 17457]

// Module 17455 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5803 */;
import strictIndexOf from "strictIndexOf" /* 17456 */;
import baseIsNaN from "baseIsNaN" /* 17457 */;


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
