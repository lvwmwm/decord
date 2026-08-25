// Module ID: 4022
// Function ID: 4023
// Name: sortedIndexBy
// Dependencies: [4023, 720]

// Module 4022 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 720 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4023 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};
