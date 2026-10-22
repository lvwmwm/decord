// Module ID: 17117
// Function ID: 17118
// Name: takeWhile
// Dependencies: [17118, 595]

// Module 17117 (takeWhile)
import baseIteratee from "baseIteratee" /* 595 */;
import baseWhile from "baseWhile" /* 17118 */;


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
