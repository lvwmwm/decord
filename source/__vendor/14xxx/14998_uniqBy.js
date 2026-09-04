// Module ID: 14998
// Function ID: 14999
// Name: uniqBy
// Dependencies: [7546, 717]

// Module 14998 (uniqBy)
import baseIteratee from "baseIteratee" /* 717 */;
import baseUniq from "baseUniq" /* 7546 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
      const tmp5 = baseUniq;
    }
    return [];
  }
};
