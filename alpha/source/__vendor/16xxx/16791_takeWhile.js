// Module ID: 16791
// Function ID: 16792
// Name: takeWhile
// Dependencies: [16792, 595]

// Module 16791 (takeWhile)
import baseIteratee from "baseIteratee" /* 595 */;
import baseWhile from "baseWhile" /* 16792 */;


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
