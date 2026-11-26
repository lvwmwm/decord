// Module ID: 19710
// Function ID: 19711
// Name: uniqWith
// Dependencies: [17510]

// Module 19710 (uniqWith)
import baseUniq from "baseUniq" /* 17510 */;


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
