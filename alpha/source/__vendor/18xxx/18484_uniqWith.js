// Module ID: 18484
// Function ID: 18485
// Name: uniqWith
// Dependencies: [16917]

// Module 18484 (uniqWith)
import baseUniq from "baseUniq" /* 16917 */;


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
