// Module ID: 5171
// Function ID: 5172
// Name: sortedIndexBy
// Dependencies: [5172, 583]

// Module 5171 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 5172 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
};
