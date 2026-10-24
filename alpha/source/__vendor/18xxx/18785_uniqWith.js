// Module ID: 18785
// Function ID: 18786
// Name: uniqWith
// Dependencies: [17208]

// Module 18785 (uniqWith)
import baseUniq from "baseUniq" /* 17208 */;


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
