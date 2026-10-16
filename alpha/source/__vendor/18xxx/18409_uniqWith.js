// Module ID: 18409
// Function ID: 18410
// Name: uniqWith
// Dependencies: [16839]

// Module 18409 (uniqWith)
import baseUniq from "baseUniq" /* 16839 */;


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
