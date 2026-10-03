// Module ID: 15715
// Function ID: 15716
// Name: uniqBy
// Dependencies: [15716, 595]

// Module 15715 (uniqBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseUniq from "baseUniq" /* 15716 */;


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
