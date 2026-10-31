// Module ID: 17840
// Function ID: 17841
// Name: baseIndexOf
// Dependencies: [17841, 5779, 17842]

// Module 17840 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5779 */;
import strictIndexOf from "strictIndexOf" /* 17841 */;
import baseIsNaN from "baseIsNaN" /* 17842 */;


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
