// Module ID: 20073
// Function ID: 20074
// Name: uniqWith
// Dependencies: [18384]

// Module 20073 (uniqWith)
import baseUniq from "baseUniq" /* 18384 */;


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
