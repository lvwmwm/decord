// Module ID: 4272
// Function ID: 4273
// Name: sortedIndexBy
// Dependencies: [4273, 584]

// Module 4272 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 584 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4273 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};
