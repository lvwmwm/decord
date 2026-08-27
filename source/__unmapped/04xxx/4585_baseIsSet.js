// Module ID: 4585
// Function ID: 4586
// Name: baseIsSet
// Dependencies: [620, 770]

// Module 4585 (baseIsSet)
import isObjectLike from "isObjectLike" /* 620 */;
import _mod770 from "module_770" /* 770 */;


export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod770(arg0);
  }
  return tmp3;
};
