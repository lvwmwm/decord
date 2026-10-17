// Module ID: 4841
// Function ID: 4842
// Name: sortedIndexBy
// Dependencies: [4842, 595]

// Module 4841 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4842 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
};
