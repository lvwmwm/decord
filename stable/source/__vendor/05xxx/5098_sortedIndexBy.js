// Module ID: 5098
// Function ID: 5099
// Name: sortedIndexBy
// Dependencies: [5099, 583]

// Module 5098 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 5099 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
};
