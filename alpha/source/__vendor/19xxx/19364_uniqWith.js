// Module ID: 19364
// Function ID: 19365
// Name: uniqWith
// Dependencies: [17178]

// Module 19364 (uniqWith)
import baseUniq from "baseUniq" /* 17178 */;


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
