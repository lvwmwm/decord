// Module ID: 16013
// Function ID: 16014
// Name: uniqBy
// Dependencies: [16014, 595]

// Module 16013 (uniqBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseUniq from "baseUniq" /* 16014 */;


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
