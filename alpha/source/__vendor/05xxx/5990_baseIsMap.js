// Module ID: 5990
// Function ID: 5991
// Name: baseIsMap
// Dependencies: [535, 633]

// Module 5990 (baseIsMap)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const _mod633 = tmp(633);

export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod633(arg0);
  }
  return tmp3;
};
