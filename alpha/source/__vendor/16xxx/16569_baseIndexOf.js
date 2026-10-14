// Module ID: 16569
// Function ID: 16570
// Name: baseIndexOf
// Dependencies: [16570, 5132, 16571]

// Module 16569 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5132 */;
import strictIndexOf from "strictIndexOf" /* 16570 */;
import baseIsNaN from "baseIsNaN" /* 16571 */;


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
