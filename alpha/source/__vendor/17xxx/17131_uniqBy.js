// Module ID: 17131
// Function ID: 17132
// Name: uniqBy
// Dependencies: [17132, 595]

// Module 17131 (uniqBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseUniq from "baseUniq" /* 17132 */;


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
