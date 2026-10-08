// Module ID: 4703
// Function ID: 4704
// Name: sortedIndexBy
// Dependencies: [4704, 595]

// Module 4703 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4704 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
};
