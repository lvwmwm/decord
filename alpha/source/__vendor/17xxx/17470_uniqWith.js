// Module ID: 17470
// Function ID: 17471
// Name: uniqWith
// Dependencies: [15716]

// Module 17470 (uniqWith)
import baseUniq from "baseUniq" /* 15716 */;


export default function uniqWith(arg0, fn) {
  let tmp;
  if (typeof fn === "function") {
    tmp = fn;
  }
  const tmp2 = arg0;
  if (tmp2) {
    if (arg0.length) {
      baseUniq(arg0, undefined, tmp);
    }
    return [];
  }
};
