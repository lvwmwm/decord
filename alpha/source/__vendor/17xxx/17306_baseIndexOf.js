// Module ID: 17306
// Function ID: 17307
// Name: baseIndexOf
// Dependencies: [17307, 5669, 17308]

// Module 17306 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5669 */;
import strictIndexOf from "strictIndexOf" /* 17307 */;
import baseIsNaN from "baseIsNaN" /* 17308 */;


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
