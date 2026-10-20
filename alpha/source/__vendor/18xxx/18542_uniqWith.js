// Module ID: 18542
// Function ID: 18543
// Name: uniqWith
// Dependencies: [16965]

// Module 18542 (uniqWith)
import baseUniq from "baseUniq" /* 16965 */;


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
