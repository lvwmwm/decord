// Module ID: 19325
// Function ID: 19326
// Name: uniqWith
// Dependencies: [17723]

// Module 19325 (uniqWith)
import baseUniq from "baseUniq" /* 17723 */;


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
