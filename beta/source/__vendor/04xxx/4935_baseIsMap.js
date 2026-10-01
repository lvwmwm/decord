// Module ID: 4935
// Function ID: 4936
// Name: baseIsMap
// Dependencies: [535, 634]

// Module 4935 (baseIsMap)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const _mod634 = tmp(634);

export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod634(arg0);
  }
  return tmp3;
};
