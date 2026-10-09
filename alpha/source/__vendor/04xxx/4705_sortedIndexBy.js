// Module ID: 4705
// Function ID: 4706
// Name: sortedIndexBy
// Dependencies: [4706, 595]

// Module 4705 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4706 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
};
