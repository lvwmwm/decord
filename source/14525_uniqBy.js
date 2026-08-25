// Module ID: 14525
// Function ID: 14526
// Name: uniqBy
// Dependencies: [7219, 720]

// Module 14525 (uniqBy)
import baseIteratee from "baseIteratee" /* 720 */;
import baseUniq from "baseUniq" /* 7219 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
      const tmp5 = baseUniq;
    }
    return [];
  }
};
