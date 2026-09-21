// Module ID: 4396
// Function ID: 4397
// Name: sortedIndexBy
// Dependencies: [4397, 588]

// Module 4396 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 588 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4397 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};
