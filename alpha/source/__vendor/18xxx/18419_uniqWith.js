// Module ID: 18419
// Function ID: 18420
// Name: uniqWith
// Dependencies: [16853]

// Module 18419 (uniqWith)
import baseUniq from "baseUniq" /* 16853 */;


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
