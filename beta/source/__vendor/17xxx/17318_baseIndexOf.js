// Module ID: 17318
// Function ID: 17319
// Name: baseIndexOf
// Dependencies: [17319, 5669, 17320]

// Module 17318 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5669 */;
import strictIndexOf from "strictIndexOf" /* 17319 */;
import baseIsNaN from "baseIsNaN" /* 17320 */;


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
