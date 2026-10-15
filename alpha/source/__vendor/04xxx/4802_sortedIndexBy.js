// Module ID: 4802
// Function ID: 4803
// Name: sortedIndexBy
// Dependencies: [4803, 595]

// Module 4802 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4803 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
};
