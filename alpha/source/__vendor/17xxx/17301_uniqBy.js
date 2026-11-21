// Module ID: 17301
// Function ID: 17302
// Name: uniqBy
// Dependencies: [17302, 583]

// Module 17301 (uniqBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseUniq from "baseUniq" /* 17302 */;


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
