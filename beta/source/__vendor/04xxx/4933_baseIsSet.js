// Module ID: 4933
// Function ID: 4934
// Name: baseIsSet
// Dependencies: [535, 634]

// Module 4933 (baseIsSet)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const _mod634 = tmp(634);

export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod634(arg0);
  }
  return tmp3;
};
