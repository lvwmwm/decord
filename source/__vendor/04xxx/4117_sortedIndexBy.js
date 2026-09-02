// Module ID: 4117
// Function ID: 4118
// Name: sortedIndexBy
// Dependencies: [4118, 717]

// Module 4117 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 717 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4118 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};
