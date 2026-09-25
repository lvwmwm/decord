// Module ID: 7021
// Function ID: 7022
// Name: uniqWith
// Dependencies: [7022]

// Module 7021 (uniqWith)
import baseUniq from "baseUniq" /* 7022 */;


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
