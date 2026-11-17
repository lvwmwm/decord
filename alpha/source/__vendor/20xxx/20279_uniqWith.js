// Module ID: 20279
// Function ID: 20280
// Name: uniqWith
// Dependencies: [18545]

// Module 20279 (uniqWith)
import baseUniq from "baseUniq" /* 18545 */;


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
