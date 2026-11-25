// Module ID: 19502
// Function ID: 19503
// Name: uniqWith
// Dependencies: [17312]

// Module 19502 (uniqWith)
import baseUniq from "baseUniq" /* 17312 */;


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
