// Module ID: 16805
// Function ID: 16806
// Name: uniqBy
// Dependencies: [16806, 595]

// Module 16805 (uniqBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseUniq from "baseUniq" /* 16806 */;


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
