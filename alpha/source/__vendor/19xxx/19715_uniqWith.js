// Module ID: 19715
// Function ID: 19716
// Name: uniqWith
// Dependencies: [18090]

// Module 19715 (uniqWith)
import baseUniq from "baseUniq" /* 18090 */;


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
