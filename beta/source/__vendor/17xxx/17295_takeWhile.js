// Module ID: 17295
// Function ID: 17296
// Name: takeWhile
// Dependencies: [17296, 583]

// Module 17295 (takeWhile)
import baseIteratee from "baseIteratee" /* 583 */;
import baseWhile from "baseWhile" /* 17296 */;


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
