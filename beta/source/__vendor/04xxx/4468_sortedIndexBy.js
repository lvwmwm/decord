// Module ID: 4468
// Function ID: 4469
// Name: sortedIndexBy
// Dependencies: [4469, 596]

// Module 4468 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 596 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4469 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
};
