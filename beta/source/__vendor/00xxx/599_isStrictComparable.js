// Module ID: 599
// Function ID: 600
// Name: isStrictComparable
// Dependencies: [521]

// Module 599 (isStrictComparable)
import isObject from "isObject" /* 521 */;


export default function isStrictComparable(arg0) {
  const tmp = arg0 == arg0 && !isObject(arg0);
  return tmp;
};
