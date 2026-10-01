// Module ID: 7026
// Function ID: 7027
// Name: uniqWith
// Dependencies: [7027]

// Module 7026 (uniqWith)
import baseUniq from "baseUniq" /* 7027 */;


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
