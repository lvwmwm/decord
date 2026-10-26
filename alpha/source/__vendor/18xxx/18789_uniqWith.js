// Module ID: 18789
// Function ID: 18790
// Name: uniqWith
// Dependencies: [17212]

// Module 18789 (uniqWith)
import baseUniq from "baseUniq" /* 17212 */;


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
