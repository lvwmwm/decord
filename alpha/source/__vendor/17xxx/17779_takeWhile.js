// Module ID: 17779
// Function ID: 17780
// Name: takeWhile
// Dependencies: [17780, 583]

// Module 17779 (takeWhile)
import baseIteratee from "baseIteratee" /* 583 */;
import baseWhile from "baseWhile" /* 17780 */;


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
