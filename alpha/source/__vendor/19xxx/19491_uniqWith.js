// Module ID: 19491
// Function ID: 19492
// Name: uniqWith
// Dependencies: [17302]

// Module 19491 (uniqWith)
import baseUniq from "baseUniq" /* 17302 */;


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
