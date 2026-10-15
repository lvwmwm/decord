// Module ID: 18367
// Function ID: 18368
// Name: uniqWith
// Dependencies: [16806]

// Module 18367 (uniqWith)
import baseUniq from "baseUniq" /* 16806 */;


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
