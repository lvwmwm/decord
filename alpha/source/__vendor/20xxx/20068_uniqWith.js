// Module ID: 20068
// Function ID: 20069
// Name: uniqWith
// Dependencies: [18379]

// Module 20068 (uniqWith)
import baseUniq from "baseUniq" /* 18379 */;


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
