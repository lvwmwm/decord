// Module ID: 7714
// Function ID: 7715
// Name: uniqWith
// Dependencies: [7715]

// Module 7714 (uniqWith)
import baseUniq from "baseUniq" /* 7715 */;


export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, undefined, tmp);
    }
    return [];
  }
};
