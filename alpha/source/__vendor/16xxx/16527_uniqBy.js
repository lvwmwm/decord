// Module ID: 16527
// Function ID: 16528
// Name: uniqBy
// Dependencies: [16528, 595]

// Module 16527 (uniqBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseUniq from "baseUniq" /* 16528 */;


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
