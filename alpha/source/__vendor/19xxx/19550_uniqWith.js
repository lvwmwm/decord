// Module ID: 19550
// Function ID: 19551
// Name: uniqWith
// Dependencies: [17358]

// Module 19550 (uniqWith)
import baseUniq from "baseUniq" /* 17358 */;


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
