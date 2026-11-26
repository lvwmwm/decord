// Module ID: 17315
// Function ID: 17316
// Name: uniqBy
// Dependencies: [17316, 583]

// Module 17315 (uniqBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseUniq from "baseUniq" /* 17316 */;


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
