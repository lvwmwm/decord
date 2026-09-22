// Module ID: 15155
// Function ID: 15156
// Name: uniqBy
// Dependencies: [7715, 584]

// Module 15155 (uniqBy)
import baseIteratee from "baseIteratee" /* 584 */;
import baseUniq from "baseUniq" /* 7715 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
};
