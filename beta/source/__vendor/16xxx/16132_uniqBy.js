// Module ID: 16132
// Function ID: 16133
// Name: uniqBy
// Dependencies: [7854, 588]

// Module 16132 (uniqBy)
import baseIteratee from "baseIteratee" /* 588 */;
import baseUniq from "baseUniq" /* 7854 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
};
