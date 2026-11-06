// Module ID: 19770
// Function ID: 19771
// Name: uniqWith
// Dependencies: [18124]

// Module 19770 (uniqWith)
import baseUniq from "baseUniq" /* 18124 */;


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
