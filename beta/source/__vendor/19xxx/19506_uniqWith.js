// Module ID: 19506
// Function ID: 19507
// Name: uniqWith
// Dependencies: [17316]

// Module 19506 (uniqWith)
import baseUniq from "baseUniq" /* 17316 */;


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
