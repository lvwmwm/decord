// Module ID: 720
// Function ID: 721
// Name: isStrictComparable
// Dependencies: [603]

// Module 720 (isStrictComparable)
import isObject from "isObject" /* 603 */;


export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !isObject(arg0);
  }
  return tmp;
};
