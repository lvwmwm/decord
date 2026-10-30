// Module ID: 19388
// Function ID: 19389
// Name: uniqWith
// Dependencies: [17794]

// Module 19388 (uniqWith)
import baseUniq from "baseUniq" /* 17794 */;


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
