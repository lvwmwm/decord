// Module ID: 18101
// Function ID: 18102
// Name: uniqBy
// Dependencies: [18102, 583]

// Module 18101 (uniqBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseUniq from "baseUniq" /* 18102 */;


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
