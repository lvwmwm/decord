// Module ID: 16513
// Function ID: 16514
// Name: takeWhile
// Dependencies: [16514, 595]

// Module 16513 (takeWhile)
import baseIteratee from "baseIteratee" /* 595 */;
import baseWhile from "baseWhile" /* 16514 */;


export default function takeWhile(arg0, arg1) {
  const tmp = arg0;
  if (tmp) {
    if (arg0.length) {
      const tmp6 = baseWhile;
      tmp6(arg0, baseIteratee(arg1, 3));
    }
    return [];
  }
};
