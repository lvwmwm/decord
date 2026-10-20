// Module ID: 18519
// Function ID: 18520
// Name: uniqWith
// Dependencies: [16946]

// Module 18519 (uniqWith)
import baseUniq from "baseUniq" /* 16946 */;


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
