// Module ID: 4937
// Function ID: 4938
// Name: sortedIndexBy
// Dependencies: [4938, 583]

// Module 4937 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4938 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
};
