// Module ID: 15423
// Function ID: 15424
// Name: uniqBy
// Dependencies: [7031, 596]

// Module 15423 (uniqBy)
import baseIteratee from "baseIteratee" /* 596 */;
import baseUniq from "baseUniq" /* 7031 */;


export default function uniqBy(arg0, arg1) {
  const tmp = arg0;
  if (tmp) {
    if (arg0.length) {
      const tmp6 = baseUniq;
      tmp6(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
};
