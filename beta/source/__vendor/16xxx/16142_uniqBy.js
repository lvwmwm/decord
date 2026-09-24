// Module ID: 16142
// Function ID: 16143
// Name: uniqBy
// Dependencies: [7886, 588]

// Module 16142 (uniqBy)
import baseIteratee from "baseIteratee" /* 588 */;
import baseUniq from "baseUniq" /* 7886 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
};
