// Module ID: 4392
// Function ID: 4393
// Name: sortedIndexBy
// Dependencies: [4393, 584]

// Module 4392 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 584 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4393 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};
