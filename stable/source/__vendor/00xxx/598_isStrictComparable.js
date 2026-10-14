// Module ID: 598
// Function ID: 599
// Name: isStrictComparable
// Dependencies: [521]

// Module 598 (isStrictComparable)
import isObject from "isObject" /* 521 */;


export default function isStrictComparable(arg0) {
  const tmp = arg0 == arg0 && !isObject(arg0);
  return tmp;
};
