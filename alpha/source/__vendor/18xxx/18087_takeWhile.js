// Module ID: 18087
// Function ID: 18088
// Name: takeWhile
// Dependencies: [18088, 583]

// Module 18087 (takeWhile)
import baseIteratee from "baseIteratee" /* 583 */;
import baseWhile from "baseWhile" /* 18088 */;


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
