// Module ID: 15718
// Function ID: 15719
// Name: baseIndexOf
// Dependencies: [15719, 4926, 15720]

// Module 15718 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4926 */;
import strictIndexOf from "strictIndexOf" /* 15719 */;
import baseIsNaN from "baseIsNaN" /* 15720 */;


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
