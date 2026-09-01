// Module ID: 7357
// Function ID: 7358
// Name: uniqWith
// Dependencies: [7358]

// Module 7357 (uniqWith)
import baseUniq from "baseUniq" /* 7358 */;


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
