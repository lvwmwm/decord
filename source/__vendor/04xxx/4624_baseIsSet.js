// Module ID: 4624
// Function ID: 4625
// Name: baseIsSet
// Dependencies: [617, 767]

// Module 4624 (baseIsSet)
import isObjectLike from "isObjectLike" /* 617 */;
import _mod767 from "module_767" /* 767 */;


export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod767(arg0);
  }
  return tmp3;
};
