// Module ID: 4428
// Function ID: 4429
// Name: sortedIndexBy
// Dependencies: [4429, 588]

// Module 4428 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 588 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4429 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};
